import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";

const API_KEY = "9c9535c15bce5f9ecce97ba1d1337bbd";

const trendingMovies = [
  {
    id: 1,
    name: "Lucifer",
    poster_path: image1,
  },
  {
    id: 2,
    name: "Ary",
    poster_path: image2,
  },
  {
    id: 3,
    name: "Lucifer",
    poster_path: image3,
  },
  {
    id: 4,
    name: "Ary",
    poster_path: image2,
  },
  {
    id: 5,
    name: "Lucifer",
    poster_path: image1,
  },
  {
    id: 6,
    name: "Ary",
    poster_path: image3,
  },
  {
    id: 7,
    name: "Lucifer",
    poster_path: image1,
  },
  {
    id: 8,
    name: "Ary",
    poster_path: image2,
  },
  {
    id: 9,
    name: "Ary",
    poster_path: image3,
  },
  {
    id: 10,
    name: "Lucifer",
    poster_path: image1,
  },
  {
    id: 11,
    name: "Ary",
    poster_path: image2,
  },
  {
    id: 12,
    name: "Ary",
    poster_path: image3,
  },
  {
    id: 13,
    name: "Lucifer",
    poster_path: image1,
  },
  {
    id: 14,
    name: "Ary",
    poster_path: image2,
  },
  {
    id: 15,
    name: "Ary",
    poster_path: image3,
  },
  {
    id: 16,
    name: "Lucifer",
    poster_path: image1,
  },
  {
    id: 17,
    name: "Ary",
    poster_path: image2,
  },
];

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default {
  trendingMovies,
};
