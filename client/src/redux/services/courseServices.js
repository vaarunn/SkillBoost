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

const courseService = {
  getAllCourseService,
};

export default courseService;
