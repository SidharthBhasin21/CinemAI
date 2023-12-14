import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
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
        action=""
        className="absolute rounded-lg text-white p-12 w-3/12 bg-black mt-40 mx-auto left-0 right-0 bg-opacity-80"
      >
        <h2 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h2>
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full  bg-zinc-800 rounded-lg"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full  bg-zinc-800 rounded-lg"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-zinc-800 rounded-lg"
        />
        <button className="p-4 mt-8 bg-red-600 w-full rounded-lg">
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
          {!isSignInForm ? "New to CinemAi?" : "Already Registered?"}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => toggleSignUpForm()}
          >
            {" "}
            {!isSignInForm ? "Sign up now." : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
