import React from "react";
import "./App.css";
import Row from "./Row";
import groom_images from "./groom_images";
// import bride_images from "./bride_images";
import Banner from "./Banner";
import Nav from "./Nav";

function Bride() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="GALLERY"
        data={groom_images.groomImages}
        isLargeRow
      />
    </div>
  );
}

export default Bride;
