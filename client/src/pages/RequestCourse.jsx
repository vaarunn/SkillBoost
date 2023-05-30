import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCourse } from "../redux/slices/courseSlice";
import toast from "react-hot-toast";
import {
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketMan from "../assets/rocketMan.json";
const RequestCourse = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
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
    dispatch(requestCourse({ name, email, course }));
  };

  return (
    <div className="px-20 py-4 md:grid grid-cols-2">
      <div className="shadow-gray-900 shadow-2xl">
        <form className="p-8 " onSubmit={handleSubmit}>
          <h1 className="text-center font-[700] text-4xl">
            Request Course Here!!!
          </h1>
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
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
            className="input"
          />
          <input
            type="text"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            placeholder="course"
            className="input"
          />
          <button className="button-input">Request Course</button>
        </form>
      </div>
    </div>
  );
};

export default RequestCourse;
