import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { useEffect } from "react";

export const FavoriteMovies = ({ favoriteMovieList }) => {
  const removeFav = (movieId) => {
    if (!token) return;

    fetch(
      `https://comic-flick-833dd2e0dd28.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favoriteMovieList.map((movies) => {
        return (
          <div key={movies._id}>
            <img src={movies.ImagePath} />
            <Link to={"movies/${movies._id"}>
              <h4>{movies.Title}</h4>
            </Link>
            <button variant="secondary" onClick={() => removeFav(movies._id)}>
              Remove from list
            </button>
          </div>
        );
      })}
    </div>
  );
};
