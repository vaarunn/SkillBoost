import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCourse, getAllCourse } from "../../redux/slices/courseSlice";
import { Link } from "react-router-dom";
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  const getAllCourses = async () => {
    const response = await dispatch(getAllCourse({}));
    console.log(response.payload);
    setCourses(response.payload.courses);
  };

  const deleteCourses = async (id) => {
    console.log(id);
    dispatch(deleteCourse(id));
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div>
      {courses &&
        courses.map((course) => {
          const { _id, title, description, createdBy, numberOfVideos } = course;
          return (
            <div key={_id} className="bg-green-500 my-5">
              <h1>{title}</h1>
              <h1>{description}</h1>
              <h1>{createdBy}</h1>
              <h1>{numberOfVideos}</h1>
              <button onClick={() => deleteCourses(_id)} className="bg-red-500">
                Delete Course
              </button>
              <Link to={`/admin/allCourses/${_id}`}>
                <button>Add Lectures</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default AllCourses;
