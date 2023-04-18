import { Router } from "express";
import {
  addToPlaylist,
  forgotPassword,
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
} from "../controllers/userControllers.js";
import { isAuthenticateUser } from "../middlewares/auth.js";

const routes = Router();

routes.get("/getAllUsers", getAllUsers);
routes.post("/register", register);
routes.post("/login", login);
routes.get("/logout", logout);

routes.get("/me", isAuthenticateUser, getMyProfile);

routes.put("/updatePassword", isAuthenticateUser, updatePassword);

routes.put("/updateProfile", isAuthenticateUser, updateProfile);

routes.put("/updateProfilePic", isAuthenticateUser, updateProfilePic);

routes.post("/forgotPassword", forgotPassword);

routes.put("/resetPassword/:token", resetPassword);

routes.post("/addToPlaylist", isAuthenticateUser, addToPlaylist);

routes.post("/removeFromPlaylist", isAuthenticateUser, removeFromPlaylist);

export default routes;
