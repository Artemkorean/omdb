import Movie from '../Movie/Movie';
import './Movies.css';

function Movies({ movies }) {
    
    return (<div className="movies">
        {
            !!movies ?
                movies.map(movie => (
                    <Movie key={`${movie.Title}-${movie.Year}`} movie={movie} />
                ))
            :
            <h1>There's no movies!</h1>
        }
    </div>)
}

export default Movies;