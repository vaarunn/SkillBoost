import { instanceFile, instanceNoFile } from "../../util/customAxios";

const getCourseLectureService = async (courseId) => {
  const response = await instanceNoFile.get(`/courses/${courseId}`);
  return response.data;
};

const addCourseLectureService = async (lectureData) => {
  const courseId = lectureData.courseId;
  const lecture = lectureData.myForm;
  const response = await instanceFile.post(`/courses/${courseId}`, lecture);
  return response.data;
};

const deleteCourseLectureService = async (dataId) => {
  console.log(dataId);
  const lectureId = dataId._id;
  const courseId = dataId.courseId;
  const response = await instanceNoFile.delete(
    `/courses/${courseId}/lecture/${lectureId}`
  );
  return response.data;
};
const lectureServices = {
  getCourseLectureService,
  addCourseLectureService,
  deleteCourseLectureService,
};

export default lectureServices;
