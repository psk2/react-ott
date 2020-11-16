import React, { useState, useEffect } from "react";
import "./Banner.css";
import YouTube from "react-youtube";
import poster from "./Images/banner/poster.jpg";
import poster2 from "./Images/banner/poster2.jpg";
import poster3 from "./Images/banner/poster3.jpg";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Banner() {
	const opts = {
		height: "500",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	const location = useLocation();

	// Youtube videos links - VIdeo ID
	const groom_titles = "1tL0rsKvZFE";
	const bride_titles = "imY6QMDs4qU";
	const live_video = "bySGXXftWJA";


	let image_src = poster3;
	const banner_descripion = `We may not have it all together, but together we have it all.`;
	const [showTitles, setShowTitles] = useState(false);
	const [showLive, setShowLive] = useState(false);
	const [showBanner, setShowBanner] = useState(true);
	const playTitles = () => {
		setShowTitles(true);
		setShowBanner(false);
	};
	const playLive = () => {
		setShowLive(true);
		setShowBanner(false);
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
	if (dimensions.width < 500) {
		image_src = poster;
	} else if (dimensions.width < 800) {
		image_src = poster2;
	} else {
		image_src = poster3;
	}
	return (
		<div className="adjust-banner">
			<header>
				<div className="banner">
					{showBanner && (
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
										<FontAwesomeIcon icon={faPlay} /> &nbsp; Play Titles
                					</button>
									<button className="banner__button"
										onClick={() => playLive()}
									>
										<FontAwesomeIcon icon={faPlay} /> &nbsp;  Watch Live
									</button>
								</div>
							</div>
						</React.Fragment>
					)}
					{location.pathname === "/bride" && showTitles &&

						<YouTube videoId={bride_titles} opts={opts} />
					}
					{location.pathname === "/groom" && showTitles &&

						<YouTube videoId={groom_titles} opts={opts} />
					}
					{showLive && <YouTube videoId={live_video} opts={opts} />}
				</div>
				<div className="banner__fadeBottom"></div>
			</header>
		</div>
	);
}

export default Banner;
