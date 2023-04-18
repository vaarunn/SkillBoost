import jwt from "jsonwebtoken";
import { tryCatchError } from "./tryCatch.js";
import { Users } from "../models/userModel.js";

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
