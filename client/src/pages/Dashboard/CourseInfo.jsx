import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCourseLecture } from "../../redux/slices/lectureSlice";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [lectures, setLectures] = useState([]);
  const dispatch = useDispatch();
  const getCourseLectures = async () => {
    const response = await dispatch(getCourseLecture(courseId));
    setLectures(response.payload.lectures);
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
    </div>
  );
};

export default CourseInfo;
