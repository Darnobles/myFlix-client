import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          {movieSearch.map((value) => {
            <Link key={value.id} to={`/movies/${value.id}`}>
              <p>{value.title}</p>
            </Link>;
          })}
        </div>
      )}
    </div>
  );
};
