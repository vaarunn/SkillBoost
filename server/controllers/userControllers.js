import { tryCatchError } from "../middlewares/tryCatch.js";
import { Courses } from "../models/courseModel.js";
import { Users } from "../models/userModel.js";

import ErrorHandler from "../utils/customErrorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";

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

export const forgotPassword = tryCatchError(async (req, res, next) => {
  const { email } = req.body;

  const user = await Users.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("Invalid Email Address", 400));
  }

  const resetToken = await user.getResetToken();

  await user.save();

  const url = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;

  const message = `Click on the message to reset password ${url}`;
  //send via email
  sendEmail(user.email, "Your Reset Token Is", message);

  res.status(200).json({
    success: true,
    message: `Reset Token has been sent to ${user.email}`,
  });
});

export const resetPassword = tryCatchError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await Users.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    return next(new ErrorHandler("Token is Invalid or Expired", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.send({
    success: true,
    message: "Password changed Successfully",
    token,
  });
});

export const addToPlaylist = tryCatchError(async (req, res, next) => {
  const userId = req.user._id;

  const user = await Users.findOne(userId);

  //passing id from postman

  const course = await Courses.findById(req.body.id);
  console.log(course);
  if (!course) {
    return next(new ErrorHandler("Invalid Course Id"), 404);
  }

  const playlistExists = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) return true;
  });

  if (playlistExists) {
    return next(new ErrorHandler("Item Already Exits", 409));
  }

  //pusing data into playlist
  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });

  await user.save();

  res.json({
    success: true,
    message: "Added to Playlist",
  });
});

export const removeFromPlaylist = tryCatchError(async (req, res, next) => {
  const userId = req.user._id;
  const user = await Users.findById(userId);
  const course = await Courses.findById(req.body.id);
  if (!course) {
    return next(new ErrorHandler("Invalid Course Id", 404));
  }

  const newPlaylist = user.playlist.filter((item) => {
    return item.course.toString() !== course._id.toString();
  });

  user.playlist = newPlaylist;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Removed From Playlist",
  });
});
