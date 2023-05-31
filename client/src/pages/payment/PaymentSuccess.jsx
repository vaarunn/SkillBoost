import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const subId = useSearchParams()[0].get("reference");
  return (
    <div className=" grid place-items-center">
      <div className="  max-w-[500px]">
        <h1 className="font-bold text-2xl my-8 text-center">
          Welcome,To the Family
        </h1>

        <div className=" min-w-[500px] shadow-2xl shadow-gray-900 roundex-xl p-8">
          <div>
            <h1 className="font-bold  text-2xl text-center mb-4 bg-[#4690eb] p-4">
              Payment Success
            </h1>
          </div>
          <div>
            <p className="font-bold text-xl my-4">
              Congratulation you're a pro member. You have access to premium
              content.
            </p>
            <p className="text-center font-bold text-xl my-8">₹9343 only</p>
          </div>
          <Link to="/profile">
            <button className="button-input">Profile</button>
          </Link>
          <h1 className="text-center">
            <span className="font-bold">Reference Id:</span> {subId && subId}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
