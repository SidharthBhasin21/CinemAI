import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, name }) => {
  return (
    <div className="w-48 ">
      <img className="rounded-md" src={IMG_CDN + posterPath} alt={name} />
    </div>
  );
};

export default MovieCard;
