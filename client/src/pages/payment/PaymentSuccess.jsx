import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Player } from "@lottiefiles/react-lottie-player";
import party from "../../assets/party.json";

const PaymentSuccess = () => {
  const subId = useSearchParams()[0].get("reference");
  return (
    <div className="px-4 md:px-20 grid place-items-center">
      <div className="bg-red-500">
        <Player
          src={party}
          loop
          autoplay
          style={{
            top: "30%",
            right: "35%",
            width: 400,
            height: "80%",
            overflow: "hidden",
            position: "fixed",
          }}
        />
      </div>

      <div>
        <h1 className="font-bold text-2xl my-8 text-center">
          Welcome,To the Family
        </h1>

        <div className="max-w-[500px] shadow-2xl shadow-gray-900 rounded-xl p-8 border border-accent">
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
            <p className="text-4xl  grid place-items-center text-accent">
              <TiTick />
            </p>
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
