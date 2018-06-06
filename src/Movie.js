import React, { Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render() {
        return(
        <div>
            <MoviePoster />
            <h1>hello this is a movie</h1>
        </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return <img src="https://profilesinhistory.com/wp-content/uploads/2013/11/hungerGames.png" />;
    }
}
export default Movie;