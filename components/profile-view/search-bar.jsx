import React, { useState } from "react";
import { MovieView } from "../movie-view/movie-view";

export const SearchBar = ({ movies }) => {
  const [movieSearch, setMovieSearch] = useState([]);

  const handleFilter = (event) => {
    const searchMovie = event.target.value;
    const newFilter = movies.filter((value) => {
      return value.title.toLowerCase().includes(searchMovie.toLowerCase());
    });
    setMovieSearch(newFilter);
  };

  return (
    <div className="search">
      <div className="input">
        <input type="text" onChange={handleFilter} />
        <div className="searchIcon"></div>
      </div>
      {movieSearch.length !== 0 && (
        <div className="dataResult">
          {movieSearch.map((value, key) => {
            return (
              <a key={key} href={`/movies/${value.id}`}>
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
