import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showToastError, showToastSuccess } from "../../util/customToast";
import { useSelector } from "react-redux";
import {
  deleteCourseLecture,
  getCourseLecture,
  resetSuccessMessage,
  resetErrorMessage,
} from "../../redux/slices/lectureSlice";

import { Player } from "@lottiefiles/react-lottie-player";

import notFound from "../../assets/lottieFiles/courseNotFound.json";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [lectures, setLectures] = useState([]);
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector(
    (state) => state.lecture
  );

  const getCourseLectures = async () => {
    const response = await dispatch(getCourseLecture(courseId));
    setLectures(response?.payload?.lectures);
  };

  const handleDeleteLecture = (courseInfo) => {
    dispatch(deleteCourseLecture(courseInfo));
    getCourseLectures();
  };

  useEffect(() => {
    getCourseLectures();
  }, []);

  useEffect(() => {
    if (successMessage) {
      showToastSuccess(successMessage);
      dispatch(resetSuccessMessage());
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      showToastError(errorMessage);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage]);

  return (
    <div>
      <div className="grid place-items-center">
        <h1>{courseId}</h1>
        <Link to={`/admin/course/lectures/${courseId}`}>
          <button className="button-input">Add Lectures</button>
        </Link>
      </div>
      <div className="px-20 ">
        {lectures?.length > 0 ? (
          <div className="px-20 rounded-2xl  py-8 bg-secondary mt-4">
            <h1 className="font-bold text-3xl">Course Lectures</h1>
            {lectures.map((item) => {
              const { title, description, _id } = item;
              return (
                <div
                  key={_id}
                  className=" bg-primary flex justify-between items-center my-8 py-4 px-8 rounded-xl "
                >
                  <div>
                    <h1>{title}</h1>
                    <h1>{description}</h1>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDeleteLecture({ courseId, _id })}
                      className="button-danger"
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center  ">
            <div className="w-[80%] h-[80%] md:h-[40%] md:w-[40%]">
              <Player src={notFound} loop autoplay />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseInfo;
