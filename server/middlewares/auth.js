import jwt from "jsonwebtoken";
import { tryCatchError } from "./tryCatch.js";
import { Users } from "../models/userModel.js";
import ErrorHandler from "../utils/customErrorHandler.js";

export const isAuthenticateUser = tryCatchError(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token, "from auth");

  if (!token) {
    return next(new Error("Not logged In", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decoded, "from auth");
  req.user = await Users.findById(decoded._id);

  next();
});

//only admin can add course
export const isAuthorizedUser = (req, res, next) => {
  const userRole = req.user.role;

  if (userRole !== "admin") {
    return next(
      new next(
        new ErrorHandler(
          `${req.user.role} Are Not Authorized To Access This Resource`,
          403
        )
      )
    );
  }

  next();
};

export const authorizeSubscriber = tryCatchError(async (req, res, next) => {
  if (req.user.subscription.status !== "active" && req.user.role !== "admin") {
    return next(
      new ErrorHandler("Only Subscribers can Access This Resource", 401)
    );
  }
  next();
});
