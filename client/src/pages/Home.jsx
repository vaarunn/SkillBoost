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
import Footer from "../components/Home/Footer";
import Roadmap from "../components/Home/Roadmap";
import Features from "../components/Home/Features";
import StartCourse from "../components/Home/StartCourse";

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
    <div className="mt-8 overflow-x-hidden lg:mt-0">
      <Hero />

      <Info />
      <Features />
      <Carasoul />

      <Students />
      <FAQ />
      <StartCourse />

      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
