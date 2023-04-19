import express from "express";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/connectDb.js";
import { errorHandlerMiddleware } from "./middlewares/customErrorHandler.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
dotenv.config({
  path: "./config/config.env",
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

console.log(
  process.env.CLOUDINARY_CLIENT_NAME,
  process.env.CLOUDINARY_CLIENT_API,
  process.env.CLOUDINARY_CLIENT_SECRET
);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/courses", courseRoutes);

app.use("/api/users", userRoutes);

//this gets called when we call next in some contorller and there is no other function this gets executed
app.use(errorHandlerMiddleware);
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
