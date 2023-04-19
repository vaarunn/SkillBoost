import { Router } from "express";
import {
  addCourseLectures,
  createCourse,
  deleteCourse,
  deleteCourseLectures,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import singleUpload from "../middlewares/multer.js";
import { isAuthenticateUser, isAuthorizedUser } from "../middlewares/auth.js";

const routes = Router();

routes.get("/getAllCourses", getAllCourses);

routes.post(
  "/createCourse",
  isAuthenticateUser,
  isAuthorizedUser,
  singleUpload,
  createCourse
);

routes.get("/:id", isAuthenticateUser, getCourseLectures);

// routes.get("/:id", getCourseLectures);

routes.post(
  "/:id",
  isAuthenticateUser,
  isAuthorizedUser,
  singleUpload,
  addCourseLectures
);

routes.delete("/:id", isAuthenticateUser, isAuthorizedUser, deleteCourse);

routes.delete(
  "/deleteLectures",
  isAuthenticateUser,
  isAuthorizedUser,
  deleteCourseLectures
);

export default routes;
