import React, { useState, useRef } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Row(props) {
  const movies = props.data;
  const [trailerUrl, setTrailerUrl] = useState("");
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="posterrow">
      <h2 className="row_title">{props.title}</h2>
      <div className="wrapper">
        <div className="row__posters" ref={ref}>
          <div
            className={`angleLeft ${props.isLargeRow && "angleLeftLarge"}`}
            onClick={() => scroll(-400)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className={`angleRight ${props.isLargeRow && "angleRightLarge"}`}
            onClick={() => scroll(400)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          {movies.map((movie) => (
            <img
              className={`row__poster ${props.isLargeRow && "row__posterLarge"
                }`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={movie.poster_path}
              height="300px"
              width="200px"
              alt={movie.name}
            />
          ))}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
