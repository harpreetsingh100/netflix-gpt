import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessgae] = useState(null);

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      username.current.value
    );
    setErrorMessgae(message);

    //SignIn/SignUp
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/3bd48e1e-8f08-497c-b50b-44d0aebc2a65/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute my-36 mx-auto right-0 left-0 p-12 bg-black w-3/12 bg-opacity-80 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn === true ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={username}
            type="text"
            placeholder="Username"
            className="p-4 my-4 w-full bg-[#333] rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#333] rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-[#333] rounded-lg"
        />
        <p className="text-red-500 font-bold text-xl py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 cursor-pointer bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}>
          {isSignedIn === true ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignedIn === true
            ? "  New to Netflix ? Sign up"
            : "Already Registered ? Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
