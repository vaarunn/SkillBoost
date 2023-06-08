import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourse,
  getAllCourse,
  resetErrorMessage,
  resetSuccessMessage,
} from "../../redux/slices/courseSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { showToastError, showToastSuccess } from "../../util/customToast";
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  const { isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.course
  );

  const getAllCourses = async () => {
    const response = await dispatch(getAllCourse({}));
    console.log(response.payload.courses);
    setCourses(response.payload.courses);
  };

  const deleteCourses = async (id) => {
    dispatch(deleteCourse(id));
    getAllCourse();
  };

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

  useEffect(() => {
    getAllCourses();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4 md:px-20 md:grid grid-cols-2 gap-8 lg:grid-cols-3">
      {courses &&
        courses.map((course) => {
          const {
            _id,
            title,
            createdBy,
            numberOfVideos,
            category,
            poster: { url },
            lectures,
          } = course;
          return (
            <div
              key={_id}
              className=" shadow-2xl shadow-gray-900 p-4 my-8 border border-accent rounded-xl"
            >
              <div className="grid place-items-center">
                <img className="h-40" src={url} alt="" />
              </div>
              <h1 className="font-bold text-sm my-2 md:text-xl">{title}</h1>
              <h1 className=" my-2">
                <span className="font-bold ">Creator</span> {createdBy}
              </h1>

              <h1 className=" text-sm my-2 lg:text-xl">
                <span className="font-bold">Category</span> {category}
              </h1>
              <h1 className="text-sm  my-2 lg:text-xl">
                <span className="font-bold">Total Videos </span>
                {numberOfVideos}
              </h1>
              <h1 className="font-bold text-sm my-2 lg:text-xl">
                {lectures?.length}
              </h1>
              <button
                onClick={() => deleteCourses(_id)}
                className="text-sm button-danger "
              >
                Delete Course
              </button>
              <Link to={`/admin/allCourses/${_id}`}>
                <button className="text-sm button-input">Add Lectures</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default AllCourses;
