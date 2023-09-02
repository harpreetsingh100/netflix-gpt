import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white px-12 py-2 text-black text-xl rounded hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 px-12 mx-2 py-2 text-white text-xl bg-opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
