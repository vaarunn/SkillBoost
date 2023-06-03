import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  removeCourseFromWatchList,
} from "../redux/slices/userSlice";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // if (user.user.playlist) {
  //   setPlaylist(user.user.playlist);
  // }
  const handleRemoveCourseFromWatchList = (courseId) => {
    dispatch(removeCourseFromWatchList(courseId));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:grid grid-cols-3 gap-4">
      {user?.user?.playlist?.length > 0 &&
        user?.user?.playlist?.map((item) => {
          const { _id, course, poster } = item;

          return (
            <div className="shadow-2xl shadow-gray-900 p-4">
              <div className="grid place-items-center">
                <img className="h-40 mb-4" src={poster} alt="title" />
              </div>

              <Link to={`/admin/course/lecture/${course}`}>
                <button className="button-input ">Watch Now</button>
              </Link>
              <button
                onClick={() => handleRemoveCourseFromWatchList(course)}
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
