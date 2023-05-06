import axios from "axios";
export const registerService = async (userData) => {
  try {
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
  } catch (error) {
    const message = error.response.data.message;

    return message;
  }
};

export const loginService = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    console.log(message);
    return message;
  }
};

export const checkUserService = async () => {
  try {
    const response = await axios("http://localhost:5000/api/users/me", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    return message;
  }
};

const authServices = {
  registerService,
  checkUserService,
  loginService,
};

export default authServices;
