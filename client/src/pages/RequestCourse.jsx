import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCourse } from "../redux/slices/courseSlice";
import toast from "react-hot-toast";
import {
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
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
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="text"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
          placeholder="course"
        />
        <button>Request Course</button>
      </form>
    </div>
  );
};

export default RequestCourse;
