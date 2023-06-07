import { instanceNoFile } from "../../util/customAxios";

const getAllCourseService = async ({ search = "", type = "" }) => {
  const keyword = search || "";
  const category = type || "";
  const response = await instanceNoFile(
    `/courses/getAllCourses?keyword=${keyword}&category=${category}`
  );
  return response.data;
};

const requestCourseService = async (userData) => {
  const response = await instanceNoFile.post("/other/courserequest", {
    userData,
  });

  return response.data;
};

const sendMessageService = async (userData) => {
  const response = await instanceNoFile.post(
    "/other/contact",
    { userData },
    { withCredentials: true }
  );
  return response.data;
};

const createCourseService = async (courseData) => {
  const response = await axios.post(
    "http://localhost:5000/api/courses/createCourse",
    courseData,
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

const deleteCourseService = async (courseId) => {
  const response = await axios.delete(
    `http://localhost:5000/api/courses/${courseId}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const addCourseToPlaylistService = async (id) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/addToPlaylist",
    { id },
    { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

const courseService = {
  getAllCourseService,
  requestCourseService,
  sendMessageService,
  createCourseService,
  deleteCourseService,
  addCourseToPlaylistService,
};

export default courseService;
