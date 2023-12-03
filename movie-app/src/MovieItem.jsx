import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-container">
      <div className="year">
        <h3>{movie.Year}</h3>
      </div>
      <div className="poster">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt="Movie App"
        />
      </div>

      <div className="desc">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieItem;
