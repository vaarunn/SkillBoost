import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../redux/slices/courseSlice";
import CourseCard from "../components/CourseCard";

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

  const getCourses = async () => {
    const response = await dispatch(getAllCourse({ search, type }));
    setCourses(response.payload.courses);
    console.log(response.payload.courses);
  };

  useEffect(() => {
    getCourses();
  }, [search, type]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="flex gap-8">
        {buttons.map((course) => {
          const { id, category } = course;
          return (
            <div key={id} className="flex">
              <button onClick={() => setType(category)} className="bg-red-200">
                {category}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {courses &&
          courses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
      </div>
    </div>
  );
};

export default Courses;
