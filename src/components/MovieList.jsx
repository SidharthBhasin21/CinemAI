import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="md:py-6 md:pl-6">
      <h1 className="font-bold text-2xl md:text-3xl py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4  ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              name={movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
