import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelSubscription,
  createSubscription,
} from "../../redux/slices/paymentSlice";
import course from "../../assets/course.jpg";
import axios from "axios";

const Subscribe = () => {
  const [key, setKey] = useState(null);
  const dispatch = useDispatch();
  const { payment, isLoading } = useSelector((state) => state.payment);
  console.log(payment);

  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/payment/getRazorPayKey");
    setKey(key);
    dispatch(createSubscription());
  };

  const { user } = useSelector((state) => state.user.user);

  const cancelSubscriptionHandler = () => {
    dispatch(cancelSubscription());
  };

  useEffect(() => {
    if (payment) {
      const openPopup = async () => {
        const options = {
          key,
          name: "CourseBundler",
          description: "Get access to all premium content",
          image: course,
          subscription_id: payment,
          callback_url: "http://localhost:5000/api/payment/paymentverification",
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "6 pack programmer at youtube",
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
    <div>
      <button className="bg-green-500" onClick={subscribeHandler}>
        Subscribe
      </button>
      <button className="bg-red-500" onClick={cancelSubscriptionHandler}>
        Cancel Subscription
      </button>
      {key ? <h1>{key}</h1> : <h1>No key to display</h1>}
    </div>
  );
};

export default Subscribe;
