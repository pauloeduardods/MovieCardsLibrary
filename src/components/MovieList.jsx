import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="container mt-4">
        <p className="h5 text-center my-3">Movie List</p>
        <div className="row">
          {movies.map((movie, index) => (
            <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />))}
        </div>
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
