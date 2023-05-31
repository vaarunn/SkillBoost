import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (!user?.user?.name) {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // User is authenticated, allow access to the protected route
  return children;
};

export default ProtectedRoute;
