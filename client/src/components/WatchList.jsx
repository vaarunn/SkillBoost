import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/slices/userSlice";
import Loader from "./Loader";

const WatchList = () => {
  const { user, isLoading } = useSelector((state) => state.user);

  // if (user.user.playlist) {
  //   setPlaylist(user.user.playlist);
  // }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-20 md:flex justify-between items-center">
      {user &&
        user.user.playlist.map((item) => {
          const { _id, course, poster } = item;
          return (
            <div key={_id}>
              <img src={poster} alt="" />
              <p>{course}</p>
            </div>
          );
        })}
    </div>
  );
};

export default WatchList;
