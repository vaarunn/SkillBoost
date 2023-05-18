import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);

  if (user) {
    console.log(user);
  }

  return user && <h1>{user.name}</h1>;
};

export default Navbar;
