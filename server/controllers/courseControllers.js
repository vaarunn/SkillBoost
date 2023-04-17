import { tryCatchError } from "../middlewares/tryCatch.js";
import { CourseModel } from "../models/courseModel.js";
import ErrorHandler from "../utils/customErrorHandler.js";

export const getAllCourses = tryCatchError(async (req, res, next) => {
  const courses = await CourseModel.find({}).select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = tryCatchError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;

  if (!title || !description || !category || !createdBy) {
    return next(new ErrorHandler("Please add all fields", 400));
  }

  // const file = req.file;

  const course = CourseModel.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully",
  });
});
