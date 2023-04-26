import React, { useEffect, useState } from "react";

import { instance } from "../../util/axios";

const Home = () => {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const getCurrentUsers = async () => {
    const response = await instance("/users/me");
    setUser(response.data.user.name);
    setRole(response.data.user.role);
    console.log(response.data.user);
  };
  useEffect(() => {
    getCurrentUsers();
  }, []);
  console.log(role);
  return (
    <div>
      {user ? <h1>Damm User found {user}</h1> : <h1>Better Luck Next time</h1>}
      {role === "admin" ? (
        <button>Dashboard</button>
      ) : (
        <button>Fuck You</button>
      )}
    </div>
  );
};

export default Home;
