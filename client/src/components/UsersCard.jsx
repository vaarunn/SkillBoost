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
    <div>
      <img className="w-[250px] h-[250px]" src={user.avatar.url} alt="" />
      <h1>{user._id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.role}</h1>
      <button
        onClick={() => {
          console.log(user._id);
          updateUserRoleHandler(user._id);
        }}
      >
        Update Role
      </button>

      <button
        onClick={() => {
          console.log(user._id);
          deleteUserHandler(user._id);
        }}
      >
        Delete User
      </button>
    </div>
  );
};

export default UsersCard;
