import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function Bride() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="WEDDING DETAILS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
    </div>
  );
}

export default Bride;
