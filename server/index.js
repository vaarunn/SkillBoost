import express from "express";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/connectDb.js";
import { errorHandlerMiddleware } from "./middlewares/customErrorHandler.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import paymentRoutes from "./routes/paymentRoutes.js";
import otherRoutes from "./routes/otherRoutes.js";
import nodeCron from "node-cron";
import { Stats } from "./models/Stats.js";
import cors from "cors";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

nodeCron.schedule("0 0 0 1 * *", async () => {
  try {
    await Stats.create({});
  } catch (error) {
    console.log(error);
  }
});

const app = express();

// console.log(typeof process.env.FRONTEND_URL);

console.log(process.env.FRONTEND_URL);

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
      "https://skill-share-8y5ey0zq3-vaarunn.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use(function (req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   const allowedOrigins = [
//     "http://localhost:5173",
//     "https://skill-share-8y5ey0zq3-vaarunn.vercel.app/",
//     "https://skillshare.onrender.com/",
//   ];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.header("Access-Control-Allow-credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
//   next();
// });

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use("/api/courses", courseRoutes);

app.use("/api/users", userRoutes);

app.use("/api/payment", paymentRoutes);

app.use("/api/other", otherRoutes);

//this gets called when we call next in some contorller and there is no other function this gets executed
app.use(errorHandlerMiddleware);
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
