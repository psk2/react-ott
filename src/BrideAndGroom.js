import React from "react";
import "./App.css";
import Row from "./Row";
import groom_images from "./groom_images";
import bride_images from "./bride_images";
import Banner from "./Banner";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

function BrideAndGroom() {
  const location = useLocation();
  let images = [];
  if (location.pathname === "/bride") {
    images = bride_images.brideImages;
  } else if (location.pathname === "/groom") {
    images = groom_images.groomImages;
  }
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" data={images} isLargeRow />
      <div className="footer">
        <footer className="location-text">
          <a
            href="https://goo.gl/maps/mNuXKj19VgmZCQuh6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here for{" "}
            <b>
              <i>Wedding</i>
            </b>{" "}
            Venue Directions <u>(Kasturi Devi Gardens)</u>
          </a>
          <br></br>
          <a
            href="https://goo.gl/maps/s1PU6ZnmYCP7QHbj8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here for{" "}
            <b>
              <i>Reception</i>
            </b>{" "}
            Venue Directions <u>(Krishnam Rajeswaramma Town Hall)</u>
          </a>
          <div className="author">Made by Sai Krishna Padarthi</div>
        </footer>
      </div>
    </div>
  );
}

export default BrideAndGroom;
