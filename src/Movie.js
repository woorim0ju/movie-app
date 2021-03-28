import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className='movie'>
            <img src={poster} alt={title} title={title} />
            <div className='movie_data'>
                <h3 className='movie_title'>{title}</h3>
                <h5 className='movie_year'><small>{year}</small></h5>
                <ul className='genres'>{genres.map((v, index) => <li key={index} className='genres_genre'>{v + ' '}</li>)}</ul>
                <p className='movie_summary'>{summary.slice(0, 180)}...</p>
                <br/>
            </div>
        </div>
    )
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;