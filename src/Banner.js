import React from "react";
import "./Banner.css";
import YouTube from "react-youtube";
// import invitation from "./Images/invitation.jpg";

function Banner() {
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <header
        className="banner"
      >
        <YouTube videoId="1tL0rsKvZFE" opts={opts} />
      </header>
    </div>
  );
}

export default Banner;
