import { tryCatchError } from "../middlewares/tryCatch.js";
import { Stats } from "../models/Stats.js";
import ErrorHandler from "../utils/customErrorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

export const contact = tryCatchError(async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new ErrorHandler("Enter ALl the Fields", 400));
  }

  const to = process.env.MY_MAIL;

  const subject = "Contact Mr Varun";
  const text = `I am ${name} and my Email is ${email} \n${message}`;

  sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Message Has Been Sent",
  });
});

export const courseRequest = tryCatchError(async (req, res, next) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return next(new ErrorHandler("Enter All The Fields", 400));
  }

  const to = process.env.MY_MAIL;

  const subject = "Request Course From Mr Varun";
  const text = `I am ${name} and my Email is ${email} \n${course}`;

  sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Your Request Has Been Sent",
  });
});

export const getDashboardStats = tryCatchError(async (req, res, next) => {
  const stats = await Stats.find({}).sort({ createdAt: "desc" }).limit(12);

  const statsData = [];

  for (let i = 0; i < stats.length; i++) {
    statsData.unshift(stats[i]);
  }

  const requiredSize = 12 - stats.length;

  for (let i = 0; i < requiredSize; i++) {
    statsData.unshift({
      users: 0,
      subscription: 0,
      views: 0,
    });
  }

  const userCount = statsData[11].users;
  const subscriptionCount = statsData[11].subscription;
  const viewsCount = statsData[11].views;

  let userProfit = true,
    viewsProfit = true,
    subscriptionProfit = true;

  let userPercentage = 0,
    viewsPercentage = 0,
    subscriptionPercentage = 0;

  if (statsData[10].users === 0) {
    userPercentage = userProfit * 100;
  }

  if (statsData[10].views === 0) {
    viewsPercentage = viewsProfit * 100;
  }

  if (statsData[10].subscription === 0) {
    subscriptionPercentage = subscriptionProfit * 100;
  } else {
    const difference = {
      users: statsData[11].users - statsData[10].users,
      views: statsData[11].users - statsData[10].users,
      subscription: statsData[11].users - statsData[10].users,
    };
    userPercentage = (difference.users / statsData[10].users) * 100;
    viewsPercentage = (difference.views / statsData[10].views) * 100;
    subscriptionPercentage =
      (difference.subscription / statsData[10].subscription) * 100;
    if (userPercentage < 0) {
      userProfit = false;
    }
    if (viewsPercentage < 0) {
      viewsProfit = false;
    }
    if (subscriptionPercentage < 0) {
      subscriptionProfit = false;
    }
  }

  res.status(200).json({
    success: true,
    stats: statsData,
    userCount,
    subscriptionCount,
    viewsCount,
    userPercentage,
    subscriptionPercentage,
    viewsPercentage,
    viewsProfit,
    subscriptionProfit,
    userProfit,
    subscriptionProfit,
  });
});
