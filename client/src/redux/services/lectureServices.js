import axios from "axios";

const getCourseLectureService = async (courseId) => {
  const url = `http://localhost:5000/api/courses/${courseId}`;
  const response = await axios(url, { withCredentials: true });
  return response.data;
};

const addCourseLectureService = async (lectureData) => {
  const courseId = lectureData.courseId;
  const lecture = lectureData.myForm;
  const response = await axios.post(
    `http://localhost:5000/api/courses/${courseId}`,
    lecture,
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

const lectureServices = {
  getCourseLectureService,
  addCourseLectureService,
};

export default lectureServices;
