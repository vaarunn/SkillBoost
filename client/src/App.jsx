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
import Subscribe from "./pages/payment/Subscribe";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymentFail";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import NotAdmin from "./pages/NotAdmin";
import AdminRoutes from "./pages/AdminRoutes/AdminRoutes";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/AdminSidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/requestCourse" element={<RequestCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/updatePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/dick" element={<AdminProtectedRoute />} />
        <Route path="/notAdmin" element={<NotAdmin />} />

        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        {/* 
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
        /> */}

        <Route path="/payment" element={<Subscribe />}></Route>
        <Route path="/payment/success" element={<PaymentSuccess />}></Route>
        <Route path="/payment/fail" element={<PaymentFail />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
