import React, { useState } from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {
  const [mute, setMute] = useState("&mute=0");
  const { movieId } = props;

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  const handleMute = () => {
    if (mute === "&mute=1") setMute("&mute=0");
    else setMute("&mute=1");
  };

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&showinfo=0&controls=0" +
          mute
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <button
        onClick={() => handleMute()}
        className="absolute text-black rounded-full text-center p-1 md:p-3 text:xs md:text-lg right-5 bottom-[65%] bg-white/50 md:right-[10%] md:bottom-[40%] bg-opacity-80 hover:bg-opacity-100"
      >
        {mute !== "&mute=1" ? "🔈" : "🔇"}
      </button>
    </div>
  );
};

export default VideoBackground;
