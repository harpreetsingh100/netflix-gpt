import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[6%] flex justify-center">
      <form className=" w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-2 px-4 m-4 border border-purple-500 col-span-9"
        />
        <button className="py-2 px-4 bg-purple-600 text-white rounded cursor-pointer col-span-3 m-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
