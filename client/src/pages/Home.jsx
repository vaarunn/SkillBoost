import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, successMessage } = useSelector(
    (state) => state.user
  );

  const getUser = async () => {
    dispatch(checkUser());
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      navigate("/courses");
    }
  }, [successMessage]);

  if (isLoading) {
    return <ClipLoader />;
  }

  return user ? <h1>{user.user.name}</h1> : "";
};

export default Home;
