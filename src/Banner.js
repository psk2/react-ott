import React, { useState } from "react";
import "./Banner.css";
import YouTube from "react-youtube";
import invitation2 from "./Images/invitation2.jpg";

function Banner() {
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const banner_descripion = `We may not have it all together, but together we have it all.`;
  const [showTitles, setShowTitles] = useState(false);
  const playTitles = () => {
    setShowTitles(true);
  };
  return (
    <div>
      <header>
        <div className="banner">
          <img
            className="banner__image"
            src={`${!showTitles && invitation2}`}
            alt="Invitation"
          />

          {!showTitles && (
            <div className="banner__contents">
              <h1 className="banner__title">SAHARI WEDDING</h1>
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
          )}
          {showTitles && <YouTube videoId="imY6QMDs4qU" opts={opts} />}
        </div>
        <div className="banner__fadeBottom"></div>
      </header>
    </div>
  );
}

export default Banner;
