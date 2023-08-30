import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick}) => {
    return (
        <div onClick= {() => {
            onMovieClick(movie);
        }}>
            {movie.title}
        </div>
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