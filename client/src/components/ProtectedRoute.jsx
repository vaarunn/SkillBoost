import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (!user || !user?.user?.name) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
