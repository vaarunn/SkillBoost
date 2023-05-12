import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import ChangePassword from "./pages/UpdatePassword";
import UpdateProfile from "./pages/UpdateProfile";
import RequestCourse from "./pages/RequestCourse";
import ContactUs from "./pages/ContactUs";
import Users from "./pages/Dashboard/Users";
import CreateCourse from "./pages/Dashboard/CreateCourse";
import AllCourses from "./pages/Dashboard/AllCourses";
import CourseInfo from "./pages/Dashboard/CourseInfo";
import AddLectures from "./pages/Dashboard/AddLectures";
import WatchLectures from "./pages/WatchLectures";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/updatePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/requestCourse" element={<RequestCourse />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/createCourse" element={<CreateCourse />} />
        <Route path="/admin/allCourses" element={<AllCourses />} />
        <Route path="/admin/allCourses/:courseId" element={<CourseInfo />} />
        <Route
          path="/admin/course/lectures/:courseId"
          element={<AddLectures />}
        />
        <Route
          path="/admin/course/lecture/:courseId"
          element={<WatchLectures />}
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
