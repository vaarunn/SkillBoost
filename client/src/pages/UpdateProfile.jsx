import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  resetErrorMessage,
  resetSuccessMessage,
  updateProfile,
} from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-hot-toast";

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
    return <ClipLoader />;
  }

  return (
    user && (
      <div>
        <form onSubmit={updateProfileHandler}>
          <img
            className="w-[250px] h-[250px]"
            src={filePreview || user.user.avatar.url}
            alt=""
          />
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
          <input type="file" onChange={changeImageHandler} accept="images/*" />
          <button>Update</button>
        </form>
      </div>
    )
  );
};

export default UpdateProfile;
