import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const theErrorMessage = error.message;
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
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroMessage("The user not found: Error message: " + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute rounded-lg text-white p-12 w-3/12 bg-black mt-40 mx-auto left-0 right-0 bg-opacity-80"
      >
        <h2 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h2>
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          autoComplete="username"
          className="p-2 my-4 w-full  bg-zinc-800 rounded-lg"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full  bg-zinc-800 rounded-lg"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="p-2 my-4 w-full bg-zinc-800 rounded-lg"
        />

        <p className="text-red-700 text-xs">{errorMessage}</p>
        <button
          className="p-4 mt-8 bg-red-600 w-full rounded-lg"
          onClick={() => handleButtonClick()}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <div className="text-xs flex mt-2 space-x-4 px-1 justify-between text-zinc-500">
          <div className="flex items-center gap-1 ">
            <input type="checkbox" name="Remember me" id="Remember me" />
            <label htmlFor="Remember me">Remember me</label>
          </div>
          <span className="hover:underline hover:cursor-pointer">
            Need help?
          </span>
        </div>
        <p className="py-6  text-zinc-400">
          {isSignInForm ? "New to CinemAi? " : "Already Registered? "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => toggleSignUpForm()}
          >
            {isSignInForm ? "Sign up now." : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
