import { tryCatchError } from "../middlewares/tryCatch.js";
import { Stats } from "../models/Stats.js";
import { Courses } from "../models/courseModel.js";
import ErrorHandler from "../utils/customErrorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";

export const getAllCourses = tryCatchError(async (req, res, next) => {
  const keyword = req.query.keyword || "";
  const category = req.query.category || "";

  const courses = await Courses.find({
    title: {
      $regex: keyword,
      //this is for case insensitive
      $options: "i",
    },
    category: {
      $regex: category,
      $options: "i",
    },
  }).select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = tryCatchError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
  console.log(title, description, category, createdBy);

  if (!title || !description || !category || !createdBy) {
    return next(new ErrorHandler("Please add all fields", 400));
  }

  const file = req.file;
  console.log(file);

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
    course,
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
export const deleteLecture = tryCatchError(async (req, res, next) => {
  // const { courseId, lectureId } = req.query;
  console.log(req.query.courseId);

  // const course = await Courses.findById(courseId);
  // if (!course) return next(new ErrorHandler("Course not found", 404));

  // const lecture = course.lectures.find((item) => {
  //   if (item._id.toString() === lectureId.toString()) return item;
  // });
  // await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
  //   resource_type: "video",
  // });

  // course.lectures = course.lectures.filter((item) => {
  //   if (item._id.toString() !== lectureId.toString()) return item;
  // });

  // course.numberOfVideos = course.lectures.length;

  // await course.save();

  // res.status(200).json({
  //   success: true,
  //   message: "Lecture Deleted Successfully",
  // });
});

Courses.watch().on("change", async () => {
  const stats = await Stats.find({}).sort({ createdAt: "desc" }).limit(1);

  const course = await Courses.find({});

  let totalViews = 0;

  for (let i = 0; i < course.length; i++) {
    totalViews += course[i].views;
  }

  stats[0].views = totalViews;
  stats[0].createdAt = new Date(Date.now());

  await stats[0].save();
});
