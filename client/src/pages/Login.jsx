import React, { useState } from "react";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { instance } from "../../util/axios";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await instance.post("/users/login", {
      email,
      name,
      password,
    });
    console.log(response.data.user);
    dispatch(login(response.data.user));
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
  );
};

export default Login;
