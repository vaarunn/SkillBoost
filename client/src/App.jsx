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

import Subscribe from "./pages/payment/Subscribe";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFail from "./pages/payment/PaymentFail";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import NotAdmin from "./pages/NotAdmin";
import AdminRoutes from "./pages/AdminRoutes/AdminRoutes";
import { useSelector } from "react-redux";
import AdminSidebar from "./components/AdminSidebar";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
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
        <Route path="/requestCourse" element={<RequestCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/updatePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/notAdmin" element={<NotAdmin />} />

        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}

        <Route path="/payment" element={<Subscribe />}></Route>
        <Route path="/payment/success" element={<PaymentSuccess />}></Route>
        <Route path="/payment/fail" element={<PaymentFail />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
