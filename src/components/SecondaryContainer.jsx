import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const tvSeries = useSelector((store) => store.movies.tvSeries);
  return (
    <div className="bg-black  ">
      <div className="-mt-5 md:-mt-80 z-10 relative pl-4 md:pl-12">
        <MovieList movies={nowPlaying} title="Now Playing" />
        <MovieList movies={tvSeries} title="Tv Series" />
        <MovieList movies={popularMovies} title="Popular" />
        <MovieList movies={tvSeries} title="Horror" />
      </div>
    </div>
  );
};

export default SecondaryContainer;
