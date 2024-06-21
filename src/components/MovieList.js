import React, { useState } from 'react';
import moviesData from './moviesData';
import Movie from './Movie';

const MovieList = () => {
  const [movies] = useState(moviesData);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
