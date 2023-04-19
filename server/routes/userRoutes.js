import { Router } from "express";
import {
  addToPlaylist,
  deleteMyProfile,
  deleteUser,
  forgotPassword,
  getAdminUser,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updatePassword,
  updateProfile,
  updateProfilePic,
  updateUserRole,
} from "../controllers/userControllers.js";
import { isAuthenticateUser, isAuthorizedUser } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const routes = Router();

routes.get("/getAllUsers", getAllUsers);
routes.post("/register", singleUpload, register);
routes.post("/login", login);
routes.get("/logout", logout);

routes.get("/me", isAuthenticateUser, getMyProfile);

routes.put("/updatePassword", isAuthenticateUser, updatePassword);

routes.put("/updateProfile", isAuthenticateUser, singleUpload, updateProfile);

routes.put("/updateProfilePic", isAuthenticateUser, updateProfilePic);

routes.post("/forgotPassword", forgotPassword);

routes.put("/resetPassword/:token", resetPassword);

routes.post("/addToPlaylist", isAuthenticateUser, addToPlaylist);

routes.post("/removeFromPlaylist", isAuthenticateUser, removeFromPlaylist);

//admin routes

routes.get(
  "/admin/getAdmin",
  isAuthenticateUser,
  isAuthorizedUser,
  getAdminUser
);

routes.put(
  "/admin/user/:id",
  isAuthenticateUser,
  isAuthorizedUser,
  updateUserRole
);

routes.delete(
  "/admin/user/delete/:id",
  isAuthenticateUser,
  isAuthorizedUser,
  deleteUser
);

routes.delete(
  "/admin/user/deleteMyAccount",
  isAuthenticateUser,
  deleteMyProfile
);

export default routes;
