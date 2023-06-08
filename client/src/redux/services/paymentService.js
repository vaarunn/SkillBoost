import axios from "axios";
import { instanceNoFile } from "../../util/customAxios";
const createSubscriptionService = async () => {
  const response = await instanceNoFile("/payment/subscribe");
  console.log(response.data.subscriptionId);
  return response.data.subscriptionId;
};

const cancelSubscriptionService = async () => {
  const response = await instanceNoFile.delete("/payment/cancelSubscription");
  console.log(response.data);
  return response.data;
};

const paymentServices = {
  createSubscriptionService,
  cancelSubscriptionService,
};
export default paymentServices;
