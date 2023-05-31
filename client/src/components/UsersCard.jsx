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
    <div className="bg-primary rounded-lg p-4 shadow-2xl">
      <table className="w-full">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                className="w-32 h-32 rounded-full"
                src={user.avatar.url}
                alt=""
              />
            </td>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                onClick={() => {
                  console.log(user._id);
                  updateUserRoleHandler(user._id);
                }}
                className="bg-secondary px-4 py-2 rounded-xl "
              >
                Update Role
              </button>

              <button
                onClick={() => {
                  console.log(user._id);
                  deleteUserHandler(user._id);
                }}
                className="bg-red-400 px-4 py-2 rounded-xl text-white ml-4"
              >
                Delete User
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersCard;
