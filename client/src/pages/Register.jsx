import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/profile.png";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketMan from "../assets/rocket.json";

import {
  checkUser,
  register,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { successMessage, errorMessage, isLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const registerHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", file);

    dispatch(register(myForm));
  };

  // useEffect(() => {
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch(resetSuccessMessage());
  //     navigate("/courses");
  //   }
  // }, [successMessage]);

  // useEffect(() => {
  //   if (errorMessage) {
  //     toast.error(errorMessage);
  //     dispatch(resetErrorMessage());
  //   }
  // }, [errorMessage]);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFile(file);
      setFilePreview(reader.result);
    };
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4 md:px-20 py-4 md:grid grid-cols-2 ">
      <div className="shadow-gray-900 shadow-2xl border border-accent rounded-xl">
        <form onSubmit={registerHandler} className="p-8  shadow-2xl">
          <h1 className="text-center font-[700] text-xl">
            Register To Lauch Your Career To The Moon
          </h1>
          <div className="grid place-items-center">
            <img
              className="w-20 h-20 rounded-full "
              src={filePreview || logo}
              alt="profile"
            />
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="jhonny"
            className="input"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="jhonny@gmail.com"
            className="input"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="pasword"
            className="input"
          />

          <input
            className="my-2"
            type="file"
            onChange={changeImageHandler}
            accept="images/*"
          />
          <button className="button-input mt-4">Register</button>
          <p className="text-sm">
            ALready A Member?{" "}
            <span className="bg-accent">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
      <div className=" h-[80%]">
        <Player
          style={{ height: 400 }}
          src={rocketMan}
          loop
          autoplay
          resizeMode="cover"
        />
      </div>
    </div>
  );
};

export default Register;
