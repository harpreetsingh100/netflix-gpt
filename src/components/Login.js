import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firbase";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              console.log(auth.currentUser);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage("Your email or password is wrong");
        });
    }

    //SignIn/SignUp
  };

  return (
    <div className="">
      <div className="hidden  ">
        <Header />
      </div>
      <div>
        <img
          className="absolute h-screen w-screen object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/3bd48e1e-8f08-497c-b50b-44d0aebc2a65/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="h-auto py-0 md:py-2  absolute md:h-78  mx-auto right-0 left-0 p-8 mt-16 md:p-12 bg-black sm:w-2/4  md:w-5/12  xl:w-4/12  bg-opacity-80 text-white w-3/4 max-h-[800px] sm:mt-[150px] md:mt-[110px]">
        <h1 className="font-bold text-3xl py-4 text-center">
          {isSignedIn === true ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
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
          className="p-2 md:my-6 cursor-pointer bg-red-600 w-full rounded-lg"
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
