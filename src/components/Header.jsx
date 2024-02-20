import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { PROFILE_IMG_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/slices/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // console.log(email);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 md:py-6 bg-gradient-to-b from-black w-full z-10 flex justify-center items-center flex-col md:flex-row md:justify-between">
      <span className="text-red-600 text-4xl w-40 font-bold m-2 md:m-5 mx-auto md:mx-0">CinemAi</span>
      {user && (
        <div className="flex md:p-2 gap-3 ">
          <button onClick={handleGptSearch} className="bg-green-900  text-xs md:text-sm  px-2 py-2 md:p-3 rounded-md text-white">{ showGptSearch ? "Home" : "GPT Search"}</button>
          <div className="">
            <img
              className="md:w-12 md:h-12 hidden md:block"
              src={PROFILE_IMG_URL}
              alt="Profile img"
            />
            <p>{user.displayName}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-xs px-2 py-2 md:text-sm md:p-3 rounded-md text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
