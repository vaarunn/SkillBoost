import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  resetErrorMessage,
  resetSuccessMessage,
  updateProfile,
} from "../redux/slices/userSlice";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";

import { Player } from "@lottiefiles/react-lottie-player";
import update from "../assets/update.json";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();

  const { user, isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.user
  );

  const getUser = async () => {
    dispatch(checkUser());
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [successMessage]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("file", file);
    dispatch(updateProfile(myForm));
  };

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
    return <Loader />;
  }

  return (
    user && (
      <div className="px-4 md:px-20 py-4 md:grid grid-cols-2 ">
        <div className="shadow-gray-900 shadow-2xl overflow-y-hidden border border-accent rounded-xl">
          <form onSubmit={updateProfileHandler} className="p-8   shadow-2xl">
            <div className=" grid place-items-center">
              <img
                className="w-32 rounded-full h-32"
                src={filePreview || user.user.avatar.url}
                alt=""
              />
            </div>
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
              className="input mt-4"
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
            hover:file:cursor-pointer hover:file:opacity-80 "
            />
            <button className="button-input mt-4">Update</button>
          </form>
        </div>
        <div className=" h-[80%]">
          <Player
            style={{ height: 400 }}
            src={update}
            loop
            autoplay
            resizeMode="cover"
          />
        </div>
      </div>
    )
  );
};

export default UpdateProfile;
