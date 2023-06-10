import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import ChangePassword from "./pages/UpdatePassword";
import UpdateProfile from "./pages/UpdateProfile";
import RequestCourse from "./pages/RequestCourse";
import ContactUs from "./pages/ContactUs";

import Subscribe from "./pages/payment/Subscribe";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymentFail";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import NotAdmin from "./pages/NotAdmin";
import AdminRoutes from "./pages/AdminRoutes/AdminRoutes";

import Error from "./pages/Error";
import AdminSidebar from "./components/AdminSidebar";
import { useSelector } from "react-redux";
import WatchLectures from "./pages/WatchLectures";
import Disclaimer from "./components/Disclaimer";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <HashRouter>
      {user?.user?.role === "admin" ? <AdminSidebar /> : <Navbar />}
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
        <Route
          path="/requestCourse"
          element={
            <ProtectedRoute>
              <RequestCourse />
            </ProtectedRoute>
          }
        />

        <Route path="/course/lecture/:courseId" element={<WatchLectures />} />

        <Route path="/courses" element={<Courses />} />
        <Route
          path="/updatePassword"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateProfile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contactUs"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />

        <Route path="/notAdmin" element={<NotAdmin />} />

        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Subscribe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment/success"
          element={
            <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment/fail"
          element={
            <ProtectedRoute>
              <PaymentFail />
            </ProtectedRoute>
          }
        />

        <Route path="/disclaimer" element={<Disclaimer />} />

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </HashRouter>
  );
}

export default App;
