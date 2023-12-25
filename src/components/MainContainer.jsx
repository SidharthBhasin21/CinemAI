import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  function getRandomNumber() {
    return Math.floor(Math.random() * 20);
  }
  const idx = getRandomNumber();
  if (!movies) return;

  const mainMovie = movies[idx];

  const { id, original_title, overview, poster_path } = mainMovie;
  return (
    <div>
      <VideoTitle
        title={original_title}
        description={overview}
        poster={poster_path}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
