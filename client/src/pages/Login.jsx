import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import {
  resetSuccessMessge,
  resetErrorMessge,
} from "../redux/slices/userSlice.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector((state) => state.user);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(resetSuccessMessge());
      navigate("/courses");
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(resetErrorMessge());
    }
  }, [errorMessage]);

  return (
    <div>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
