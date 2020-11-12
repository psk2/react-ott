import React, { useState, useEffect } from "react";
import "./Banner.css";
import YouTube from "react-youtube";
import poster from "./Images/banner/poster.jpg";
import poster2 from "./Images/banner/poster2.jpg";
import poster3 from "./Images/banner/poster3.jpg";

function Banner() {
	const opts = {
		height: "500",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	let image_src = poster3;
	const banner_descripion = `We may not have it all together, but together we have it all.`;
	const [showTitles, setShowTitles] = useState(false);
	const playTitles = () => {
		setShowTitles(true);
	};

	const [dimensions, setDimensions] = React.useState({
		height: window.innerHeight,
		width: window.innerWidth
	})

	useEffect(() => {
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth
			})
		}
		window.addEventListener('resize', handleResize)
	}, []);
	// console.log('dimensions :>> ', dimensions);
	if(dimensions.width < 500){
		image_src = poster;
	} else if(dimensions.width < 800){
		image_src = poster2;
	} else {
		image_src = poster3;
	}
	return (
		<div>
			<header>
				<div className="banner">
					{!showTitles && (
						<React.Fragment>
							<img
								className="banner__image"
								src={image_src}
								alt="Invitation"
							/>
							<div className="banner__contents">
								<h1 className="banner__title">JOY OF LOVE</h1>
								<h1 className="banner__description">{banner_descripion}</h1>
								<div className="banner__buttons">
									<button
										className="banner__button banner_play_button"
										onClick={() => playTitles()}
									>
										Play
                					</button>
									<button className="banner__button">My List</button>
								</div>
							</div>
						</React.Fragment>
					)}
					{showTitles && <YouTube videoId="imY6QMDs4qU" opts={opts} />}
				</div>
				<div className="banner__fadeBottom"></div>
			</header>
		</div>
	);
}

export default Banner;
