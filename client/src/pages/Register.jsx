import React, { useState } from "react";
import logo from "../assets/logo.png";
import { register } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();

  const { isLoading, user } = useSelector((state) => state.user);
  console.log(isLoading, user);
  const registerHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", file);

    dispatch(register(myForm));
  };

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFile(file);
      setFilePreview(reader.result);
      console.log(filePreview);
    };
  };

  return (
    <div>
      <form onSubmit={registerHandler}>
        <img className="w-[250px] h-[250px]" src={filePreview || logo} alt="" />
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

        <input type="file" onChange={changeImageHandler} accept="images/*" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
