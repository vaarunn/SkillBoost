import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminStats } from "../../redux/slices/adminSlice";
import Loader from "../../components/Loader";
import Databox from "../../components/charts/DataBox";
import { DoughnutChart, LineChart } from "../../components/charts/Charts";
const Dashboard = () => {
  const dispatch = useDispatch();

  const { admin, isLoading } = useSelector((state) => state.admin);

  const getStats = async () => {
    await dispatch(getAdminStats());
  };
  console.log(admin.viewsProfit, "i am here");

  useEffect(() => {
    getStats();
  }, []);

  console.log(admin.subscriptionCount);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="px-4 md:flex md:px-20 justify-around">
        <Databox
          title="Views Count"
          qty={admin.viewsCount}
          qtyPercentage={admin.viewsPercentage}
          profit={admin.viewsProfit}
        />
        <Databox
          title="Users"
          qty={admin.userCount}
          qtyPercentage={admin.userPercentage}
          profit={admin.userProfit}
        />
        <Databox
          title="Subscription"
          qty={admin.subscriptionCount}
          qtyPercentage={admin.subscriptionPercentage}
          profit={admin.subscriptionProfit}
        />
      </div>

      <div className="m-0 md:m-16 rounded-lg p-0 md:p-16 mt-4 md:mt-16 shadow-md">
        <h2 className="text-2xl font-bold text-center md:text-left pt-8 md:ml-16">
          Views Graph
        </h2>

        <LineChart views={admin.stats.map((item) => item.views)} />
      </div>

      <div className="grid place-items-center ">
        <div className="    md:m-16 rounded-lg p-0 md:p-16 mt-4 md:mt-16 shadow-md ">
          <h2 className="text-center mb-4 text-lg font-bold">Users</h2>

          <DoughnutChart
            users={[
              admin.subscriptionCount,
              admin.userCount - admin.subscriptionCount,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
