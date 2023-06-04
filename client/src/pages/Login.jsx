import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import {
  resetSuccessMessage,
  resetErrorMessage,
} from "../redux/slices/userSlice.js";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Player } from "@lottiefiles/react-lottie-player";
import knowledge from "../assets/knowledge.json";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { successMessage, errorMessage, user, isLoading } = useSelector(
    (state) => state.user
  );

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // useEffect(() => {
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch(resetSuccessMessage());
  //     navigate("/courses");
  //   }
  // }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      // showToast(errorMessage);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4 md:px-20 py-16 md:grid grid-cols-2">
      <div className="shadow-gray-900 shadow-2xl border-accent rounded-xl border">
        <form onSubmit={loginHandler} className="p-8">
          <h1 className="font-[700] text-3xl text-center">
            Skills Matter Bro...
          </h1>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="jhonny@gmail.com"
            className="input my-4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="input my-4"
          />
          <button className="button-input">Login</button>
          <p className="text-sm my-2">
            Don't Have an Account?{" "}
            <Link className="bg-accent" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block">
        <Player
          style={{ height: 400 }}
          src={knowledge}
          loop
          autoplay
          resizeMode="cover"
        />
      </div>
    </div>
  );
};

export default Login;
