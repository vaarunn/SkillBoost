import { Router } from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/CourseControllers.js";

const routes = Router();

routes.get("/getAllCourses", getAllCourses);

routes.post("/createCourse", createCourse);

export default routes;
