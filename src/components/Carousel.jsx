import React from 'react';
import PropTypes from 'prop-types';

function createButton(index) {
  return (
    <button
      type="button"
      data-bs-target="#carouselBest"
      data-bs-slide-to={ index }
      className="active"
      aria-current="true"
      aria-label={ `Slide ${index + 1}` }
    />
  );
}

function createCarouselItem({ imagePath: image, title, subtitle }, index) {
  let className = 'carousel-item';
  if (index === 0) className += ' active';
  return (
    <div className={ className }>
      <img src={ image } className="d-block w-100" alt={ `Title: ${title}` } />
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

class Carousel extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div
        id="carouselBest"
        className="carousel slide carousel-size"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          { movies.map((movie, index) => createButton(index)) }
        </div>
        <div className="carousel-inner carousel-size">
          { movies.map((movie, index) => createCarouselItem(movie, index)) }
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBest"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBest"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
  }))).isRequired,
};

export default Carousel;
