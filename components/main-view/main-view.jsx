import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";

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

return (
  <Row>
    {!user ? (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    ) : selectedMovie? (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    ) : movies.length === 0 ? (
      <div>The list is empty!</div>
    ) : (

    <>
      <>
        {movies.map((movie) => (
          <MovieCard
           key={movie.id}
            movie={movie}
           onMovieClick={(newSelectedMovie) => {
             setSelectedMovie(newSelectedMovie);
           }}
          />
        ))}
      </>
      <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
    </>
    )}
  </Row>
  )
  };