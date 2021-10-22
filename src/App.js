import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Header />
      <Carousel movies={ movies } />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
