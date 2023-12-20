import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
  console.log(user);
  return (
    <div className="absolute px-8 py-6 bg-gradient-to-b from-black w-full z-10 flex justify-between items-baseline">
      <span className="text-red-600 text-4xl w-40 font-bold m-5">CinemAi</span>
      {user && (
        <div className="flex p-2">
          <div className="">
            <img
              className="w-12 h-12"
              src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXMrBpySF8XZ8sCkWvT8aguR_wkRNG3R8T7iwBTsIkMyYwlB6it3SFUkQreUS4BP7yzuo542K7ZoPtOd13o6SbNT3mRrFQA.png?r=6a6"
              alt="Profile img"
            />
            <p>{user.displayName}</p>
          </div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
