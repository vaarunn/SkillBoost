import { instanceFile, instanceNoFile } from "../../util/customAxios";

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
  const response = await instanceFile.post("/courses/createCourse", courseData);
  console.log(response.data);
  return response.data;
};

const deleteCourseService = async (courseId) => {
  const response = await instanceNoFile.delete(`/courses/${courseId}`);
  return response.data;
};

const addCourseToPlaylistService = async (id) => {
  const response = await instanceNoFile.post("/users/addToPlaylist", { id });
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
