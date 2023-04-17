import { Router } from "express";
import {
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
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

export default routes;
