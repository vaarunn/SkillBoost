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

export const updatePasswordService = async ({ oldPassword, newPassword }) => {
  const response = await axios.put(
    "http://localhost:5000/api/users/updatePassword",
    { oldPassword, newPassword },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateProfileService = async (myFile) => {
  console.log(myFile);

  const response = await axios.put(
    "http://localhost:5000/api/users/updateProfile",
    myFile,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  console.log(response.data);
  return response.data;
};

export const logoutService = async (myFile) => {
  const response = await axios.get("http://localhost:5000/api/users/logout", {
    withCredentials: true,
  });

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
};

export default authServices;
