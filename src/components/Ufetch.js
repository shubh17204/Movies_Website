import { useEffect, useState } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`;

export const Ufetch = (apiParams) => {
  const [loading, SetLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, IsError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        SetLoading(false);
        setMovie(data.Search || data);
      } else {
        IsError({
          show: "True",
          msg: "Error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${apiParams}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { loading, error, movie };
};

export default Ufetch;
