import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCourse, sendMessage } from "../redux/slices/courseSlice";
import toast from "react-hot-toast";
import {
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="message"
        />
        <button>Request Course</button>
      </form>
    </div>
  );
};

export default ContactUs;
