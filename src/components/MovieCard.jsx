import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return (
      <div className="col-lg-6 col-sm-12 px-0 my-2 bg-dark">
        <div className="mx-2 border border-3 card-border-color rounded movie-card-item">
          <img
            src={ imagePath }
            alt={ `${title}-${subtitle}` }
            className="movie-image rounded mb-2"
          />
          <hr className="card-hr" />
          <h4 className="h4 title-subtitle my-1 mx-4">{title}</h4>
          <div className="row justify-content-end">
            <div className="col-9">
              <h5 className="h6 title-subtitle my-1 mx-4 text-start">{subtitle}</h5>
            </div>
            <Rating rating={ rating } />
          </div>
          <p className="movie-card-storyline p-2">{storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieCard;
