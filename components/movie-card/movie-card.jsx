import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick}) => {
    return (
        <Card>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{useBootstrapBreakpoints.author}</Card.Text>
            <Button onClick= {() => onMovieClick(movie)}
            variant="link"> Open
            </Button>
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
        imagePath: PropTypes.string.isRequired

    }).isRequired,
    onBookClick: PropTypes.func.isRequired
};  