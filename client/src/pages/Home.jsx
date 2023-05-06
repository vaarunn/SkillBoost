import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      dispatch(checkUser());
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  if (isLoading) {
    return <ClipLoader />;
  }

  return user ? <h1>{user.user.name}</h1> : "";
};

export default Home;
