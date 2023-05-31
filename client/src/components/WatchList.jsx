import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/slices/userSlice";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { user, isLoading } = useSelector((state) => state.user);

  // if (user.user.playlist) {
  //   setPlaylist(user.user.playlist);
  // }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:flex justify-between items-center">
      {user &&
        user.user.playlist.map((item) => {
          const { _id, course, poster } = item;
          return (
            <div className="shadow-2xl shadow-gray-900 p-4">
              <div className="grid place-items-center">
                <img className="h-40" src={poster} alt="title" />
              </div>

              <Link to={`/admin/course/lecture/${_id}`}>
                <button className="button-input">Watch Now</button>
              </Link>
              <button
                onClick={() => handleAddToPlaylist(_id)}
                className="button-danger"
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default WatchList;
