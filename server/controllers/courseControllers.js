import { tryCatchError } from "../middlewares/tryCatch.js";
import { Courses } from "../models/courseModel.js";
import ErrorHandler from "../utils/customErrorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";

export const getAllCourses = tryCatchError(async (req, res, next) => {
  const courses = await Courses.find({}).select("-lectures");
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

  const file = req.file;
  // console.log(file);

  const fileUri = getDataUri(file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const course = await Courses.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully",
  });
});

export const getCourseLectures = tryCatchError(async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Courses.findById(courseId);
  // console.log(courseId);
  if (!course) {
    return next(new ErrorHandler("Course Not found", 404));
  }

  course.views += 1;

  await course.save();

  console.log(course);

  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

//max video size is 100mb in free plan
export const addCourseLectures = tryCatchError(async (req, res, next) => {
  const { title, description } = req.body;

  const courseId = req.params.id;

  const course = await Courses.findById(courseId);

  if (!course) {
    return next(new ErrorHandler("Course Not Found", 404));
  }

  const file = req.file;
  const fileUri = getDataUri(file);
  console.log(fileUri);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    resource_type: "video",
  });

  course.lectures.push({
    title,
    description,
    video: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  course.numberOfVideos = course.lectures.length;

  await course.save();

  res.status(201).json({
    success: true,
    message: "Lecture Added To Course",
  });
});

export const deleteCourse = tryCatchError(async (req, res, next) => {
  const courseId = req.params.id;

  const course = await Courses.findById(courseId);

  if (!course) {
    return next(new ErrorHandler("Course Not Found", 404));
  }

  //destroying links uploaded to the cloud
  await cloudinary.v2.uploader.destroy(course.poster.public_id);

  for (let i = 0; i < course.lectures.length; i++) {
    const singleLecture = course.lectures[i];

    await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
      resource_type: "video",
    });
  }

  await course.deleteOne();

  res.status(200).json({
    success: true,
    message: "Course Deleted Successfully",
  });
});

//fuck this is not working will look into this later
export const deleteCourseLectures = tryCatchError(async (req, res, next) => {});
