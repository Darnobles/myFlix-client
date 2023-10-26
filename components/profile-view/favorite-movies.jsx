import React from "react";
import { Link } from "react-router-dom";

export const FavoriteMovies = ({ favoriteMovieList }) => {
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
