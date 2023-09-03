import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[6%] flex justify-center">
      <form className=" w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          placeholder="What would you like to watch today"
          className="py-2 px-4 m-4 border border-purple-500 col-span-9"
        />
        <button className="py-2 px-4 bg-purple-600 text-white rounded cursor-pointer col-span-3 m-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
