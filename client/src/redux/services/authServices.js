import { instanceFile, instanceNoFile } from "../../util/customAxios";

export const registerService = async (userData) => {
  const response = await instanceFile.post("/users/register", userData);
  return response.data;
};

export const loginService = async (userData) => {
  console.log(userData);
  const response = await instanceNoFile.post("/users/login", userData);
  return response.data;
};

export const checkUserService = async () => {
  const response = await instanceNoFile("/users/me");
  return response.data;
};

export const updatePasswordService = async ({ oldPassword, newPassword }) => {
  const response = await instanceNoFile.put("/users/updatePassword", {
    oldPassword,
    newPassword,
  });
  return response.data;
};

export const updateProfileService = async (myFile) => {
  const response = await instanceFile.put("/users/updateProfile", myFile);

  console.log(response.data);
  return response.data;
};

export const logoutService = async () => {
  const response = await instanceNoFile.get("/users/logout");

  console.log(response.data);
  return response.data;
};

export const removeCourseFromWatchListService = async (courseId) => {
  const response = await instanceNoFile.post(
    `/users/removeFromPlaylist?id=${courseId}`
  );
  console.log(response.data);
  return response.data;
};

const authServices = {
  registerService,
  checkUserService,
  loginService,
  updatePasswordService,
  updateProfileService,
  logoutService,
  removeCourseFromWatchListService,
};

export default authServices;
