import axios from "axios";

const getAllCourseService = async ({ search = "", type = "" }) => {
  const keyword = search || "";
  const category = type || "";
  const response = await axios(
    `http://localhost:5000/api/courses/getAllCourses?keyword=${keyword}&category=${category}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const requestCourseService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/other/courserequest",
    userData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

const sendMessageService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/other/contact",
    userData,
    { withCredentials: true }
  );
  return response.data;
};

const courseService = {
  getAllCourseService,
  requestCourseService,
  sendMessageService,
};

export default courseService;
