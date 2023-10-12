import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <Card className="h-100">
      <Card.Img variant="top" src="movie.image" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        {/* <Card.Text>{movie.director}</Card.Text> */}
        <Link to={"/movies/${encodeURIComponent(movie.id)}"}>
          <Button variant="Link">Open</Button>
        </Link>
        <Button variant="Link">Favorite</Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};
