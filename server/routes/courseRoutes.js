import { Router } from "express";
import {
  addCourseLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseControllers.js";
import singleUpload from "../middlewares/multer.js";
import {
  authorizeSubscriber,
  isAuthenticateUser,
  isAuthorizedUser,
} from "../middlewares/auth.js";

const routes = Router();

routes.get("/getAllCourses", getAllCourses);

routes.post(
  "/createCourse",
  isAuthenticateUser,
  isAuthorizedUser,
  singleUpload,
  createCourse
);

routes.get("/:id", isAuthenticateUser, authorizeSubscriber, getCourseLectures);

routes.post(
  "/:id",
  isAuthenticateUser,
  isAuthorizedUser,
  singleUpload,
  addCourseLectures
);

routes.delete("/:id", isAuthenticateUser, isAuthorizedUser, deleteCourse);

routes.delete(
  "/:courseId/lecture/:lectureId",
  isAuthenticateUser,
  isAuthorizedUser,
  deleteLecture
);

export default routes;
