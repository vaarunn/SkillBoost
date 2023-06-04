import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubscription } from "../../redux/slices/paymentSlice";
import skillboost from "../../assets/skillboost.png";
import axios from "axios";

const Subscribe = () => {
  const [key, setKey] = useState(null);
  const dispatch = useDispatch();
  const { payment, isLoading } = useSelector((state) => state.payment);

  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/payment/getRazorPayKey");
    setKey(key);
    dispatch(createSubscription());
  };

  const { user } = useSelector((state) => state.user.user);

  useEffect(() => {
    if (payment) {
      const openPopup = async () => {
        const options = {
          key,
          name: "Skill Boost",
          description: "Get access to all premium content",
          image: skillboost,
          subscription_id: payment,
          callback_url: "http://localhost:5000/api/payment/paymentverification",
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "Skill Boost",
          },
          theme: {
            color: "#FFC800",
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopup();
    }
  }, [isLoading, payment, dispatch]);

  return (
    <div className="px-4 md:px-20 grid place-items-center  ">
      <h1 className="font-bold text-2xl my-8">
        Welcome,Value For Money Content At Your Fingertips
      </h1>
      <h1 className="font-bold text-xl my-2">
        You Need To Subscribe To View This Content
      </h1>

      <div className=" max-w-[500px] shadow-2xl shadow-gray-900 roundex-xl p-8 border border-accent rounded-xl">
        <div>
          <h1 className="font-bold  text-2xl text-center mb-4 bg-[#4690eb] p-4 rounded-xl">
            Piro Pack
          </h1>
        </div>
        <div>
          <p className="font-bold text-xl my-4">
            Join pro pack and get access to all content.
          </p>
          <p className="text-center font-bold text-xl my-8">₹9343 only</p>
        </div>
        <button className="button-input" onClick={subscribeHandler}>
          Subscribe
        </button>

        <p className="text-center"> {key ? <h1>{key}</h1> : ""}</p>
      </div>
    </div>
  );
};

export default Subscribe;
