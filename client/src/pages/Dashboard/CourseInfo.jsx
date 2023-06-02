import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  deleteCourseLecture,
  getCourseLecture,
} from "../../redux/slices/lectureSlice";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [lectures, setLectures] = useState([]);
  const dispatch = useDispatch();

  const getCourseLectures = async () => {
    const response = await dispatch(getCourseLecture(courseId));
    setLectures(response.payload.lectures);
    console.log(lectures);
  };

  const handleDeleteLecture = () => {
    dispatch(deleteCourseLecture());
  };

  useEffect(() => {
    getCourseLectures();
  }, []);
  return (
    <div>
      <h1>{courseId}</h1>
      <Link to={`/admin/course/lectures/${courseId}`}>
        <button>Add Lectures</button>
      </Link>
      <div>
        {lectures.map((item) => {
          const { title, description, _id } = item;
          return (
            <div className=" bg-green-500 flex justify-between items-center my-8">
              <div>
                <h1>{title}</h1>
                <h1>{description}</h1>
              </div>
              <div>
                <button onClick={() => handleDeleteLecture({ courseId, _id })}>
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseInfo;
