import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of five movies, comma seperated like the result given ahead. Example Result: Gadar,Sholay,Don,Matrix,Golmaal ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) return;
    console.log(gptResults.choices?.[0].message?.content);
    const gptMovies = gptResults.choices?.[0].message?.content.split();
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-2 px-4 m-4 border rounded bg-[#333] border-none col-span-10 text-white"
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
