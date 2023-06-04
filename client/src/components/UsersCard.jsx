import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUserRole } from "../redux/slices/adminSlice";
import toast from "react-hot-toast";
import {
  resetSuccessMessge,
  resetErrorMessge,
} from "../redux/slices/adminSlice";

const UsersCard = ({ user }) => {
  const dispatch = useDispatch();
  const { successMessage, errorMessage } = useSelector((state) => state.admin);

  const updateUserRoleHandler = async (id) => {
    dispatch(updateUserRole(id));
  };

  const deleteUserHandler = async (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(resetSuccessMessge());
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(resetErrorMessge());
    }
  }, [errorMessage]);

  return (
    <div className="shadow-2xl shadow-gray-900 p-4 my-8 border border-accent rounded-xl">
      <div className="grid place-items-center">
        <img className="h-40" src={user.avatar.url} alt="profile pic" />
      </div>
      <h1 className="text-sm  lg:text-xl my-2">
        <span className="font-bold">UserID:</span> {user._id}
      </h1>
      <h1 className="text-sm  lg:text-xl my-2">
        <span className="font-bold">UserName:</span> {user.name}
      </h1>
      <h1 className="text-sm lg:text-xl my-2">
        <span className="font-bold">UserEmail:</span> {user.email}
      </h1>
      <h1 className="text-sm lg:text-xl my-2">
        <span className="font-bold">UserRole:</span> {user.role}
      </h1>

      <button
        onClick={() => {
          console.log(user._id);
          updateUserRoleHandler(user._id);
        }}
        className="button-input"
      >
        Update Role
      </button>
      <button
        onClick={() => {
          console.log(user._id);
          deleteUserHandler(user._id);
        }}
        className="button-danger"
      >
        Delete User
      </button>
    </div>
  );
};

export default UsersCard;
