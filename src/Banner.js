import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./request";
import YouTube from "react-youtube";
import invitation from "./Images/invitation.jpg";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }
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
        // style={{
        //   backgroundSize: "cover",
        //   backgroundImage: `url(${invitation})`,
        //   backgroundPosition: "center center",
        // }}
      >
        {/* <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div> 
        <div className="banner__fadeBottom"></div> */}
        <YouTube videoId="1tL0rsKvZFE" opts={opts} />
      </header>
    </div>
  );
}

export default Banner;
