import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCourse, sendMessage } from "../redux/slices/courseSlice";
import toast from "react-hot-toast";
import {
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketMan from "../assets/rocketMan.json";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector((state) => state.course);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(resetSuccessMessage());
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendMessage({ name, email, message }));
  };

  return (
    <div className="px-20 py-4 md:grid grid-cols-2">
      <div className="shadow-gray-900 shadow-2xl">
        <form onSubmit={handleSubmit} className="p-8 ">
          <h1 className="text-center font-[700] text-4xl">Hit Us Up!!!</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
            className="input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
            className="input"
          />
          <textarea
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="message"
            className="input"
          />
          <button className="button-input">Send Message</button>
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

export default ContactUs;
