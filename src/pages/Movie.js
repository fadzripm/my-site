import React, { Component } from 'react';
import Axios from 'axios';

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      movies: []
    }
  }
  componentWillMount() {
    Axios
      .get('https://facebook.github.io/react-native/movies.json')
      .then(({ status, statusText, data }) => {
        this.setState({
          title: data.title,
          description: data.description,
          movies: data.movies
        })
      })
  }
  render() {
    function mapMovieList(movies) {
      return movies.map(movie => {
        return <li>{movie.title} - {movie.releaseYear}</li>
      })
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.description}</h2>
        <ul>{mapMovieList(this.state.movies)}</ul>
      </div>
    )
  }
}

export default MoviePage;
