import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import ChangePassword from "./pages/UpdatePassword";
import UpdateProfile from "./pages/UpdateProfile";
import RequestCourse from "./pages/RequestCourse";
import ContactUs from "./pages/ContactUs";
import Users from "./pages/Dashboard/Users";
import CreateCourse from "./pages/Dashboard/CreateCourse";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/updatePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/requestCourse" element={<RequestCourse />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/createCourse" element={<CreateCourse />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
