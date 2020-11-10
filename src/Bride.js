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
      <Row title="NETFLIX ORIGINALS" data={request.trendingMovies} isLargeRow />
      <Row title="Trending Now" data={request.trendingMovies} />
      {/* <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} /> */}
    </div>
  );
}

export default Bride;
