import React from "react";
import {useNavigate} from 'react-router-dom'

const VideoTitle = ({ title, overview }) => {
  const navigate = useNavigate()
  return (
    <div className="pt-[20%] md:pt-[15%] p-6 md:px-24 absolute text-white w-screen aspect-video md:flex md:flex-col background-[0]">
      <h1 className="text-5xl font-bold hidden md:inline-block">{title}</h1>
      <p
        className="py-6 md:py-0 text-lg w-1/3 sm:w-3/4 md:w-2/4 hidden md:inline-block md:mt-4
     ">
        {overview}
      </p>
      <div>
        <button onClick={()=>navigate("/movie/976573")}   className="bg-gray-400 md:bg-white px-4 md:px-10 md:py-2 py-2  text-black text-sm md:text-xl rounded hover:opacity-80 hidden md:inline-block md:mt-4"> ▶️ Play </button>
        <button className="bg-gray-500 px-10 md:px-10 mx-2 py-2 md:mt-4 text-white text-xl bg-opacity-50 rounded  hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
