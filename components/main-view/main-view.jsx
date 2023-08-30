import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] =useState(storedToken? storedToken: null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) return;

    fetch("..../movies", {
      headers: {Authorization: 'Bearer ${token}'},
    })
    .then ((response) => response.json())
    .then((movies) => {
      setMovies(movies);
    });
  }, [token]);

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

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    );
  }

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
    <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
  </div>
  );
};