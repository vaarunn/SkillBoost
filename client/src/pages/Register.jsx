import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
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

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(resetSuccessMessage());
      navigate("/courses");
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);

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
