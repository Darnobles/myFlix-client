import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
// import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://comic-flick-833dd2e0dd28.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => {
      const moviesFromApi = data.map((movies) => {
        return {
          _id: movies.id,
          title: movies.title,
          description: movies.description,
          genre: movies.genre,
          director: movies.director,
          imagePath: movies.imagePath
        };
      });
      setMovies(moviesFromApi);
    });
  }, []);

  // if (!user) {
  //   return <LoginView />
  // }

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};