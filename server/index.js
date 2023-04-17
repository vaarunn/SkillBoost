import express from "express";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/connectDb.js";
import { errorHandlerMiddleware } from "./middlewares/customErrorHandler.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

dotenv.config({
  path: "./config/config.env",
});

app.use("/api/courses", courseRoutes);

app.use("/api/users", userRoutes);

//this gets called when we call next in some contorller and there is no other function this gets executed
app.use(errorHandlerMiddleware);
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
