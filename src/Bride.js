import React from "react";
import "./App.css";
import Row from "./Row";
import groom_images from "./groom_images";
import bride_images from "./bride_images";
import Banner from "./Banner";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

function Bride() {
  const location = useLocation();
  let images = [];
  if (location.pathname === "/bride") {
    images = bride_images.brideImages
  } else if (location.pathname === "/groom") {
    images = groom_images.groomImages
  }
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Trending People"
        data={images}
        isLargeRow
      />
      <div className="footer"></div>
    </div>
  );
}

export default Bride;
