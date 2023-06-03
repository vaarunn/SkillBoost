import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (!user || !user.user) {
    return <Navigate to="/notAdmin" />;
  }

  if (!user?.user?.role === "admin") {
    return <Navigate to="/notAdmin" />;
  }
  return <div>{children}</div>;
};

export default AdminProtectedRoute;
