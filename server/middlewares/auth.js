import jwt from "jsonwebtoken";
import { tryCatchError } from "./tryCatch.js";
import { Users } from "../models/UserModel.js";

export const isAuthenticateUser = tryCatchError(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
    return next(new Error("Not logged In", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Users.findById(decoded._id);

  next();
});
