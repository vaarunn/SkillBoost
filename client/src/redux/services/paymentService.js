import axios from "axios";
const createSubscriptionService = async () => {
  const response = await axios("http://localhost:5000/api/payment/subscribe", {
    withCredentials: true,
  });
  console.log(response.data.subscriptionId);
  return response.data.subscriptionId;
};

const paymentServices = {
  createSubscriptionService,
};
export default paymentServices;
