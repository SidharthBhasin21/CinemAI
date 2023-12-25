import React from "react";

const VideoTitle = (props) => {
  const { title, description, poster } = props;
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
      {/*<img src={poster} alt={title} />*/}
      <h1 className="text-5xl font-bold w-1/3">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="flex gap-5">
        <button className=" bg-white rounded-md font-bold text-black py-3 px-12  hover:bg-opacity-80">
          Play
        </button>
        <button className=" bg-slate-500 rounded-md font-bold text-white py-3 px-12 bg-opacity-50 hover:bg-opacity-70">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
