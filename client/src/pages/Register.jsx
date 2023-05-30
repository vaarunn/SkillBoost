import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketMan from "../assets/rocketMan.json";

import {
  checkUser,
  register,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-hot-toast";
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
    return <ClipLoader />;
  }

  return (
    <div className="rounded-div md:grid grid-cols-2 overflow-y-hidden">
      <form onSubmit={registerHandler} className="px-6 h-[80%] shadow-2xl">
        <h1 className="text-center font-[700] text-xl">
          Register To Lauch Your Career To The Moon
        </h1>
        <img
          className="w-20 h-20 rounded-full "
          src={filePreview || logo}
          alt="profile"
        />
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
      </form>
      <div className=" h-[80%]">
        <Player src={rocketMan} loop autoplay />
      </div>
    </div>
  );
};

export default Register;
