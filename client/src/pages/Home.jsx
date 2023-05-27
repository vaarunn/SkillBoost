import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Carasoul from "../components/Home/Carasoul";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import Students from "../components/Home/Students";
import FAQ from "../components/Home/FAQ";

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

  if (isLoading) {
    return <ClipLoader />;
  }

  // return user ? <h1>{user.user.name}</h1> : "";
  return (
    <div className="mt-8">
      <Hero />

      <Info />

      <Students />

      <FAQ />
      <div>
        <Carasoul />
      </div>
    </div>
  );
};

export default Home;
