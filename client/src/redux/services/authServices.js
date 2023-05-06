import axios from "axios";
export const registerService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    userData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const loginService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    userData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const checkUserService = async () => {
  const response = await axios("http://localhost:5000/api/users/me", {
    withCredentials: true,
  });
  return response.data;
};

const authServices = {
  registerService,
  checkUserService,
  loginService,
};

export default authServices;
