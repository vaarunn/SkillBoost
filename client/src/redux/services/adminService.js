import axios from "axios";

const getAllUsersService = async () => {
  const response = await axios(
    "http://localhost:5000/api/users/admin/getAllUsers",
    { withCredentials: true }
  );
  return response.data;
};

const updateUserRoleService = async (id) => {
  console.log(id);
  const response = await axios.put(
    `http://localhost:5000/api/users/admin/user/${id}`,
    {},
    { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

const deleteUserService = async (userId) => {
  const response = await axios.delete(
    `http://localhost:5000/api/users/admin/user/delete/${userId}`,
    { withCredentials: true }
  );
  return response.data;
};

const adminServices = {
  getAllUsersService,
  updateUserRoleService,
  updateUserRoleService,
  deleteUserService,
};

export default adminServices;
