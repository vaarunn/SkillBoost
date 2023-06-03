import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminStats } from "../../redux/slices/adminSlice";
import Loader from "../../components/Loader";
const Dashboard = () => {
  const dispatch = useDispatch();

  const getStats = async () => {
    await dispatch(getAdminStats());
  };

  useEffect(() => {
    getStats();
  }, []);

  const { admin, isLoading } = useSelector((state) => state.admin);
  console.log(admin.subscriptionCount);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Dashboard;
