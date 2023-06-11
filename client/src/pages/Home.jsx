import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  resetCheckUser,
  resetLogout,
} from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Carasoul from "../components/Home/Carasoul";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import Students from "../components/Home/Students";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Home/Footer";
import Roadmap from "../components/Home/Roadmap";
import Features from "../components/Home/Features";
import StartCourse from "../components/Home/StartCourse";
import { showToastError, showToastSuccess } from "../util/customToast";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logoutSuccess, logoutError, checkUserSuccess, checkUserError, user } =
    useSelector((state) => state.user);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (logoutSuccess) {
      showToastSuccess(logoutSuccess);
      dispatch(resetLogout());
    }
  }, [logoutSuccess]);

  useEffect(() => {
    if (logoutError) {
      showToastError(logoutError);
      dispatch(resetLogout());
    }
  }, [logoutError]);

  useEffect(() => {
    if (checkUserSuccess) {
      showToastSuccess(checkUserSuccess);
    }
  }, [checkUserSuccess]);

  useEffect(() => {
    if (checkUserError) {
      showToastError(checkUserError);
    }
  }, [checkUserError]);

  const getUser = async () => {
    dispatch(checkUser());
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

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
