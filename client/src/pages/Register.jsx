import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/profile.png";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketMan from "../assets/lottieFiles/rocket.json";

import { register, resetRegister } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { showToastError, showToastSuccess } from "../util/customToast";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerSuccessMessage, registerErrorMessage, isLoading } =
    useSelector((state) => state.user);

  const registerHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", file);

    dispatch(register(myForm));
  };

  useEffect(() => {
    if (registerSuccessMessage) {
      showToastSuccess(registerSuccessMessage);
      dispatch(resetRegister());
      navigate("/profile");
    }
  }, [registerSuccessMessage]);

  useEffect(() => {
    if (registerErrorMessage) {
      showToastError(registerErrorMessage);
      dispatch(resetRegister());
    }
  }, [registerErrorMessage]);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFile(file);
      setFilePreview(reader.result);
    };
  };

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
            type="file"
            onChange={changeImageHandler}
            accept="images/*"
            className="text-sm
            file:mr-5 file:py-3 file:px-2
            file:rounded-full file:border-0
            file:text-md file:font-semibold  
            file:bg-secondary file:text-secondary
            md:file:px-10
            hover:file:cursor-pointer hover:file:opacity-80 my-2"
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
