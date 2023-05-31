import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../redux/slices/courseSlice";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";

const buttons = [
  {
    id: 1,
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

  const { isLoading } = useSelector((state) => state.course);
  console.log(isLoading);

  const getCourses = async () => {
    const response = await dispatch(getAllCourse({ search, type }));
    setCourses(response.payload.courses);
    console.log(response.payload.courses);
  };

  useEffect(() => {
    getCourses();
  }, [search, type]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-20">
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
      <div className="md:grid grid-cols-3 gap-8">
        {courses &&
          courses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
      </div>
    </div>
  );
};

export default Courses;
