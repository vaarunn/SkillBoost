import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  logout,
  resetErrorMessage,
  resetSuccessMessage,
  resetUser,
} from "../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import WatchList from "../components/WatchList";
import { cancelSubscription } from "../redux/slices/paymentSlice";
import { showToastSuccess } from "../util/showToast";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.user
  );

  const getUser = async () => {
    dispatch(checkUser());
    dispatch(resetSuccessMessage());
    dispatch(resetErrorMessage());
  };

  const logoutHandler = async () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (successMessage) {
      showToastSuccess(successMessage);
      dispatch(resetSuccessMessage());
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      showToastSuccess(successMessage);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  let formattedDate;
  if (user) {
    const date = new Date(user?.user?.createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" };
    formattedDate = date.toLocaleDateString("en-US", options);
  }

  const cancelSubscriptionHandler = () => {
    dispatch(cancelSubscription());
  };

  return (
    user && (
      <div className=" grid place-items-center md:px-20">
        <h1 className="font-bold text-2xl my-4">User Profile</h1>
        <div className=" md:flex items-center">
          <div className=" grid place-items-center">
            <img
              className="w-32 h-32 rounded-full md:w-40 md:h-40 "
              src={user?.user?.avatar?.url}
              alt="profile pic"
            />
          </div>
          <div className="px-20 mt-8 text-xl">
            <h1>
              <span className="font-bold ">Name </span>
              {user?.user?.name}
            </h1>

            <h1>
              <span className="font-bold ">Email </span>
              {user?.user?.email}
            </h1>

            <h1>
              <span className="font-bold">Joined On </span>
              {formattedDate}
            </h1>
            <Link to="/updatePassword">
              <button className="button-input">update password</button>
            </Link>
            <Link to="/updateProfile">
              <button className="button-input">update profile</button>
            </Link>

            {user?.user?.role !== "admin" ? (
              user?.user?.subscription ? (
                <button
                  onClick={cancelSubscriptionHandler}
                  className="button-input"
                >
                  Unsubscribe
                </button>
              ) : (
                <Link to="/payment">
                  <button className="button-input">Subscribe</button>
                </Link>
              )
            ) : (
              <button className="button-input">
                Admin does not need to subscribe
              </button>
            )}

            <Link to="/">
              <button onClick={logoutHandler} className="button-danger">
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className="px-4 md:px-20">
          <h1 className="text-3xl font-bold my-4">WatchList</h1>
          <WatchList />
        </div>
      </div>
    )
  );
};

export default Profile;
