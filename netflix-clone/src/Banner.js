import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

const base_url = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {" "}
      <div className="banner__contents">
        {/*Title */}
        <h1></h1>
        {/*div >2 button */}
        {/*description */}
      </div>
    </header>
  );
}

export default Banner;
