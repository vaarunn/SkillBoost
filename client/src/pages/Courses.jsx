import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCourse,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/courseSlice";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";
import { checkUser } from "../redux/slices/userSlice";
import { Player } from "@lottiefiles/react-lottie-player";
import notFound from "../assets/lottieFiles/courseNotFound.json";
import { showToastError, showToastSuccess } from "../util/customToast";

const buttons = [
  {
    category: "Web Development",
  },
  {
    id: 2,
    category: "Application Development",
  },
  {
    id: 3,
    category: "Machine Learning",
  },
  {
    id: 4,
    category: "AI",
  },
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  const { isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.course
  );

  const getCourses = async () => {
    const response = await dispatch(getAllCourse({ search, type }));
    setCourses(response.payload.courses);
  };

  // useEffect(() => {
  //   dispatch(checkUser());
  // }, []);

  useEffect(() => {
    getCourses();
  }, [search, type]);

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
    <div className="px-4  md:px-20">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="input"
      />
      <div className="md:flex items-center justify-around my-8">
        {buttons.map((course) => {
          const { id, category } = course;
          return (
            <div key={id} className="md:flex ">
              <button
                onClick={() => setType(category)}
                className="button-input"
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>

      {isLoading ? (
        <Loader />
      ) : courses.length === 0 ? (
        <div className="flex justify-center items-center  ">
          <div className="w-[80%] h-[80%] md:h-[40%] md:w-[40%]">
            <Player src={notFound} loop autoplay />
          </div>
        </div>
      ) : (
        <div className="md:grid grid-cols-2 gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
