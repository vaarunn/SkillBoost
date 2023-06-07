import { instanceNoFile } from "../../util/customAxios";

const getAllUsersService = async () => {
  const response = await instanceNoFile("/users/admin/getAllUsers");
  return response.data;
};

const updateUserRoleService = async (id) => {
  const response = await instanceNoFile.put(`/users/admin/user/${id}`, {});
  return response.data;
};

const deleteUserService = async (userId) => {
  const response = await instanceNoFile.delete(
    `/users/admin/user/delete/${userId}`
  );
  return response.data;
};

const getAdminStatsService = async () => {
  const response = await instanceNoFile("/other/admin/stats");
  return response.data;
};

const adminServices = {
  getAllUsersService,
  updateUserRoleService,
  updateUserRoleService,
  deleteUserService,
  getAdminStatsService,
};

export default adminServices;
