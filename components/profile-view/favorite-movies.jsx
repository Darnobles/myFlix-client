import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const FavoriteMovies = ({ favoriteMovieList, token, user, setUser }) => {
  const [movies, setMovies] = useState(favoriteMovieList);

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
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== movieId)
        );
        alert("Movie removed successfully");
        setUser(data);
      });
  };

  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Favorite Movies</h1>
      <>
        {movies.map((movie) => (
          <Col
            className="mb-4"
            key={movie.id}
            style={{
              flex: "0 0 calc(25% - 20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <MovieCard
              movie={movie}
              onFavorite={removeFav}
              token={token}
              user={user}
            />
          </Col>
        ))}
      </>
    </div>
  );
};
