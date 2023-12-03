import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import MovieItem from "./MovieItem";
import LesneIcon from "./lense.svg";

const App1 = () => {
  const api_url = "http://www.omdbapi.com?apikey=b6003d8a";

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchMovies("Barbie");
  });

  //fetching data according to title
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    //Search is a property of an object which has a list of movies
    setMovies(data.Search); // updates the 'movies' state
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search by Movie Name"
        />

        <img
          src={LesneIcon}
          alt="Lense"
          onClick={() => {
            searchMovies(searchInput);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // add each movie to a movie card and display.
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
