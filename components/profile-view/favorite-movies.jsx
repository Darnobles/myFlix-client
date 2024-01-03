import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export const FavoriteMovies = ({ favoriteMovieList, token, user }) => {
  const history = useHistory();

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
        alert("Movie removed successful");
        history.go(0);
      });
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <>
        {favoriteMovieList.map((movie) => {
          return (
            <Col className="mb-4" key={movie.id}>
              <MovieCard
                movie={movie}
                onFavorite={removeFav}
                token={token}
                user={user}
              />
            </Col>
          );
        })}
      </>
    </div>
  );
};
