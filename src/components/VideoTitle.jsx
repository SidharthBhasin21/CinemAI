import React from "react";

const VideoTitle = (props) => {
  const { title, description, poster } = props;
  return (
    <div className="pt-[25%] md:pt-[10%] px-4 md:px-24 absolute text-white bg-gradient-to-tr from-black w-full aspect-video">
      
    { /*<img src={poster} alt={title} /> */}
      
      <h1 className="text-2xl md:text-5xl  font-bold w-2/3 md:w-1/3">{title}</h1>
      <p className="py-3 text-base w-1/3 hidden md:inline-block">{description}</p>

      <div className="flex gap-5 p-1 mt-2 md:mt-0 md:p-0">
        
        <button className=" bg-white rounded-md font-bold text-black text-xs md:text-sm py-2 px-6 md:py-3 md:px-12  hover:bg-opacity-80">
          Play
        </button>

        <button className=" bg-slate-500 rounded-md font-bold text-white text-xs md:text-sm py-2 px-6 md:py-3 md:px-12 bg-opacity-50 hover:bg-opacity-70">
          More info
        </button>

      </div>

    </div>
  );
};

export default VideoTitle;
