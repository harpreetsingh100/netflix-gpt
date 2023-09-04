import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleGptSearchClick = () => {};

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-2 px-4 m-4 border rounded bg-[#333] border-none col-span-10"
        />
        <button
          className="py-2 px-4 bg-purple-600 text-white rounded cursor-pointer col-span-2 m-4"
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
