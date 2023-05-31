import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/adminSlice";
import UsersCard from "../../components/UsersCard";
import Loader from "../../components/Loader";
const Users = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  const { isLoading } = useSelector((state) => state.admin);

  const getUsers = async () => {
    const response = await dispatch(getAllUsers());
    // console.log(response.payload.users);
    setUsers(response.payload.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-20 ">
      <div className=" bg-secondary rounded-2xl px-20 shadow-2xl">
        <h1 className="py-4 text-2xl font-bold ">Users</h1>
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
  );
};

export default Users;
