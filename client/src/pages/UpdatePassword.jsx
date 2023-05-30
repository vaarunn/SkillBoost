import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetErrorMessage,
  resetSuccessMessage,
  updatePassword,
} from "../redux/slices/userSlice";
import { toast } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketMan from "../assets/rocketMan.json";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector((state) => state.user);

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

  const handlePasswordChange = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ oldPassword, newPassword }));
  };

  return (
    <div className="px-20 py-4 md:grid grid-cols-2">
      <div className="shadow-gray-900 shadow-2xl">
        <form className="p-8" onSubmit={handlePasswordChange}>
          <h1 className="text-center font-bold text-3xl">Update Password</h1>
          <input
            type="text"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            placeholder="oldPassword"
            className="input"
          />
          <input
            type="text"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            placeholder="newPassword"
            className="input"
          />
          <button className="button-input">Submit</button>
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

export default ChangePassword;
