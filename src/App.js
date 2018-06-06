import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';


const movies = [
  {
    title: "Matrix",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Oldboy",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title: "StarWars",
    poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
  },
  {
    title: "StarTrek",
    poster: "http://www.startrekmovie.com/images/share.jpg"
  }
]

class App extends Component {
  render() {
    return (<div className="App">
      {movies.map((movie,index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
    </div>
    );
  }
}

export default App;
