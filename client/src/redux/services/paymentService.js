import axios from "axios";
const createSubscriptionService = async () => {
  const response = await axios("http://localhost:5000/api/payment/subscribe", {
    withCredentials: true,
  });
  console.log(response.data.subscriptionId);
  return response.data.subscriptionId;
};

const cancelSubscriptionService = async () => {
  const response = await axios.delete(
    "http://localhost:5000/api/payment/cancelSubscription",
    { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

const paymentServices = {
  createSubscriptionService,
  cancelSubscriptionService,
};
export default paymentServices;
