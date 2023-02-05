import React from "react";
import { NavLink } from "react-router-dom";
import { GetContext } from "./context";
const imgUrl = "https://via.placeholder.com/200/200";

export const Movies = () => {
  const { movie, loading } = GetContext();
  if (loading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((currMovie) => {
                const { imdbId, Title, Poster } = currMovie;
                const movieName = Title.substring(0, 15);
                return (
                  <NavLink to={`movie/${imdbId}`} key={imdbId}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movies;
