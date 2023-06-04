import { Route, Routes } from "react-router-dom";
import AdminProtectedRoute from "../../components/AdminProtectedRoute";
import Users from "../Dashboard/Users";
import CreateCourse from "../Dashboard/CreateCourse";
import AllCourses from "../Dashboard/AllCourses";
import CourseInfo from "../Dashboard/CourseInfo";
import AddLectures from "../Dashboard/AddLectures";
import WatchLectures from "../WatchLectures";
import Dashboard from "../Dashboard/Dashboard";

const AdminRoutes = () => {
  return (
    <AdminProtectedRoute>
      <Routes path="/admin">
        <Route path="/users" element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/allCourses" element={<AllCourses />} />
        <Route path="/allCourses/:courseId" element={<CourseInfo />} />
        <Route path="/course/lectures/:courseId" element={<AddLectures />} />
      </Routes>
    </AdminProtectedRoute>
  );
};

export default AdminRoutes;
