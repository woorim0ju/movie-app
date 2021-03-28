import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  }

  // getMovies = () => {
  //   const movies = axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  //   .then((res) => {
  //    console.log(res.data.data.movies);
  //    this.setState({ movies: res.data.data.movies, isLoading: false });
  //   })
  //   .catch((err) => {console.log(err)});
  // }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies: movies, isLoading: false });
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className='container'>
        {isLoading ? <div className='loader'><span className='loader_text'>Loading...</span></div> :
          <div className='movies'>
            {movies.map(v => (
              <Movie key={v.id}
                id={v.id}
                year={v.year}
                title={v.title}
                summary={v.description_full}
                poster={v.medium_cover_image}
                genres={v.genres} />)
            )}
          </div>
        }
      </section>
    );
  }
}

export default App;