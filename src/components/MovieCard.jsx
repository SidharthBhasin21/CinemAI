import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, name }) => {

  if (!posterPath)return null;
  return (
    <div className="w-36 md:w-48 transition ease-in-out">
      <img className="rounded-md" src={IMG_CDN + posterPath} alt={name} />
    </div>
  );
};

export default MovieCard;
