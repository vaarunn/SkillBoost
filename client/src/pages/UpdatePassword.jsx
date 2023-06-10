import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetProfile, updatePassword } from "../redux/slices/userSlice";
import { Player } from "@lottiefiles/react-lottie-player";
import update from "../assets/lottieFiles/update.json";
import { showToastError, showToastSuccess } from "../util/customToast";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const { updateProfileSuccess, updateProfileError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (updateProfileSuccess) {
      showToastSuccess(updateProfileSuccess);
      dispatch(resetProfile());
    }
  }, [updateProfileSuccess]);

  useEffect(() => {
    if (updateProfileError) {
      showToastError(updateProfileError);
      dispatch(resetProfile());
    }
  }, [updateProfileError]);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ oldPassword, newPassword }));
  };

  return (
    <div className="px-4 md:px-20 py-4 md:grid grid-cols-2">
      <div className="shadow-gray-900 shadow-2xl border border-accent rounded-xl">
        <form className="p-8" onSubmit={handlePasswordChange}>
          <h1 className="text-2xl md:text-3xl text-center font-bold ">
            Update Password
          </h1>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            placeholder="oldPassword"
            className="input"
          />
          <input
            type="password"
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
      <div className="hidden md:block h-[80%]">
        <Player
          style={{ height: 400 }}
          src={update}
          loop
          autoplay
          resizeMode="cover"
        />
      </div>
    </div>
  );
};

export default ChangePassword;
