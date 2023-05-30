import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);

  const getUser = async () => {
    dispatch(checkUser());
    dispatch(resetSuccessMessage());
    dispatch(resetErrorMessage());
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  let formattedDate;
  if (user) {
    const date = new Date(user.user.createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" };
    formattedDate = date.toLocaleDateString("en-US", options);
  }

  return (
    user && (
      <div>
        <img
          className="w-[250px] h-[250px]"
          src={user.user.avatar.url}
          alt=""
        />
        <h1>{user.user.name}</h1>
        <h1>{user.user.email}</h1>
        <h1>{formattedDate}</h1>
        <br />
        <Link to="/updatePassword">
          <button>change password</button>
        </Link>
        <Link to="/updateProfile">
          <button>update profile</button>
        </Link>
      </div>
    )
  );
};

export default Profile;
