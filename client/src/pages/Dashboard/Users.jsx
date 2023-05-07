import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/adminSlice";
import UsersCard from "../../components/UsersCard";
const Users = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await dispatch(getAllUsers());
    // console.log(response.payload.users);
    setUsers(response.payload.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div>
        {users &&
          users.map((user, index) => {
            return <UsersCard key={index} user={user} />;
          })}
      </div>
    </div>
  );
};

export default Users;
