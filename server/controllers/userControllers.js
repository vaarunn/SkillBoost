import { tryCatchError } from "../middlewares/tryCatch.js";
import { Users } from "../models/UserModel.js";
import ErrorHandler from "../utils/customErrorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const register = tryCatchError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    return next(new ErrorHandler("Please Enter all the fields", 400));
  }

  let user = await Users.findOne({ email });

  //if user is already present
  if (user) {
    return next(new ErrorHandler("User is already present", 409));
  }

  user = await Users.create({
    name,
    email,
    password,
    avatar: {
      public_id: "tempid",
      url: "tempurl",
    },
  });

  sendToken(res, user, "User registerd successfully", 201);
});

export const login = tryCatchError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter all the fields", 400));
  }

  const user = await Users.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(res, user, `Welcome Back ${user.name}`, 200);

  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    user,
  });
});

export const logout = tryCatchError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "logged out successfully",
    });
});

export const getMyProfile = tryCatchError(async (req, res, next) => {
  const user = await Users.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const getAllUsers = (req, res) => {
  res.send("Got all Users");
};

export const updatePassword = tryCatchError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    next(new Error("Please Enter All fields", 400));
  }

  const user = await Users.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldPassword);

  if (!isMatch) {
    return next(new Error("Incorrect Password", 400));
  }

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
    user,
  });
});

export const updateProfile = tryCatchError(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await Users.findById(req.user._id);

  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }

  res.status(201).json({
    success: true,
    message: " Profile Updated Successfully",
    user,
  });
});

export const updateProfilePic = tryCatchError(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Profile Pic Updated Successfully",
  });
});
