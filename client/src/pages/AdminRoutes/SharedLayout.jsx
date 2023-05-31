import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const SharedLayout = () => {
  return (
    <div className="flex flex-row bg-neutral-100  w-screen overflow-x-hidden">
      <div>
        <AdminSidebar />
      </div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
