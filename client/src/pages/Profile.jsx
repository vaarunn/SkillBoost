import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  logout,
  resetErrorMessage,
  resetSuccessMessage,
  resetUser,
} from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import WatchList from "../components/WatchList";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);

  const getUser = async () => {
    dispatch(checkUser());
    dispatch(resetSuccessMessage());
    dispatch(resetErrorMessage());
  };

  const logoutHandler = async () => {
    dispatch(logout());
  };

  if (isLoading) {
    return <Loader />;
  }

  let formattedDate;
  if (user) {
    const date = new Date(user?.user?.createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" };
    formattedDate = date.toLocaleDateString("en-US", options);
  }

  return (
    user && (
      <div>
        <div className="grid place-items-center">
          <h1 className="font-bold text-2xl my-4">User Profile</h1>
          <div className="md:flex items-center">
            <div className=" grid place-items-center">
              <img
                className="w-32 h-32 rounded-full md:w-40 md:h-40 "
                src={user?.user?.avatar?.url}
                alt="profile pic"
              />
            </div>
            <div className="px-20 mt-8 text-xl">
              <h1>
                <span className="font-bold">Name </span>
                {user?.user?.name}
              </h1>

              <h1>
                <span className="font-bold">Email </span>
                {user?.user?.email}
              </h1>

              <h1>
                <span className="font-bold">Joined On </span>
                {formattedDate}
              </h1>
              <Link to="/updatePassword">
                <button className="button-input">change password</button>
              </Link>
              <Link to="/updateProfile">
                <button className="button-input">update profile</button>
              </Link>
              <Link to="/">
                <button
                  onClick={logoutHandler}
                  className="@apply rounded-xl my-2 py-2 px-4 bg-red-400 text-white font-bold w-full hover:bg-red-500 transform  duration-150"
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
        <WatchList />
      </div>
    )
  );
};

export default Profile;
