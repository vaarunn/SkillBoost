import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  resetErrorMessage,
  resetSuccessMessage,
} from "../../redux/slices/adminSlice";
import UsersCard from "../../components/UsersCard";
import Loader from "../../components/Loader";
import { showToastError, showToastSuccess } from "../../util/customToast";

const Users = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  const { isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.admin
  );

  const getUsers = async () => {
    const response = await dispatch(getAllUsers());
    setUsers(response.payload.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (successMessage) {
      showToastSuccess(successMessage);
      dispatch(resetSuccessMessage());
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      showToastError(errorMessage);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="px-4 md:px-20 ">
      <div>
        <h1 className="py-4 text-2xl font-bold lg:text-4xl">Users</h1>
        <div className="md:grid grid-cols-2 gap-8">
          {users &&
            users.map((user, index) => {
              return (
                <div className=" py-4">
                  <UsersCard key={index} user={user} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Users;
