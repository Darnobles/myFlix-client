export const MovieCard = ({ movie, onMovieClick}) => {
    return (
        <div onclick= {() => {
            onMovieClick(movie);
        }}>
            {movie.title}
        </div>
    );
};