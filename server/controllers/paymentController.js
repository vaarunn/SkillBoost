import { tryCatchError } from "../middlewares/tryCatch.js";
import { Users } from "../models/userModel.js";
import ErrorHandler from "../utils/customErrorHandler.js";
import { instance } from "../index.js";
import crypto from "crypto";
import { Payments } from "../models/Payment.js";

export const createSubscription = tryCatchError(async (req, res, next) => {
  const userId = req.user._id;

  const user = await Users.findById(userId);

  if (user.role === "admin") {
    return next(new ErrorHandler("Admin Can't Buy Subscription", 401));
  }

  const plan_id = process.env.PLAN_ID || "plan_LffW37GnlRyOPI";

  const subscription = await instance.subscriptions.create({
    plan_id: plan_id,
    customer_notify: 1,
    total_count: 12,
  });
  user.subscription.id = subscription.id;
  user.subscription.status = subscription.status;

  await user.save();

  res.status(201).json({
    success: true,
    subscriptionId: subscription.id,
  });
});

export const paymentVerification = tryCatchError(async (req, res, next) => {
  const { razorpay_signature, razorpay_payment_id, razorpay_subscription_id } =
    req.body;
  console.log(
    razorpay_signature,
    razorpay_payment_id,
    razorpay_subscription_id
  );
  const user = await Users.findById(req.user._id);

  const subscription_id = user.subscription.id;

  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(razorpay_payment_id + "|" + subscription_id, "utf-8")
    .digest("hex");

  const isAuthentic = generated_signature === razorpay_signature;

  if (!isAuthentic)
    return res.redirect(`${process.env.FRONTEND_URL}/payment/fail`);

  await Payments.create({
    razorpay_signature,
    razorpay_payment_id,
    razorpay_subscription_id,
  });

  user.subscription.status = "active";

  await user.save();

  res.redirect(
    `${process.env.FRONTEND_URL}/payment/success?reference=${razorpay_payment_id}`
  );
});

export const getRazorPayKey = tryCatchError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    key: process.env.RAZORPAY_API_KEY,
  });
});

export const cancelSubscription = tryCatchError(async (req, res, next) => {
  const user = await Users.findById(req.user._id);
  const subscriptionId = user.subscription.id;
  console.log(user.subscription.id, "this is subscription id");

  let refund = false;

  instance.subscriptions.cancel(subscriptionId);

  const payment = await Payments.findOne({
    razorpay_subscription_id: subscriptionId,
  });

  // const gap = Date.now() - payment.createdAt;

  // const refundTime = process.env.REFUND_DAYS * 24 * 60 * 60 * 1000;

  // if (refundTime > gap) {
  //   instance.payments.refund(payment.razorpay_payment_id);
  //   refund = true;
  // }

  // await payment.remove();
  user.subscription.id = undefined;
  user.subscription.status = undefined;
  await user.save();

  res.status(200).json({
    success: true,
    message: refund
      ? "Subscription cancelled, You will receive full refund within 7 days"
      : "No refund initiated as subscription was cancelled after 7 days",
  });
});
