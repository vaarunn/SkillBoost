import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAdminStats } from "../../redux/slices/adminSlice";
const Dashboard = () => {
  const dispatch = useDispatch();

  const getStats = async () => {
    const response = await dispatch(getAdminStats());
    console.log(response);
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
