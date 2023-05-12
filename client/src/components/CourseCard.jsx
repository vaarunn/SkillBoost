import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  //   console.log(course);
  console.log(course.poster.url);

  return (
    <div className="bg-green-300 ">
      <img src={course.poster.url} alt="title" />
      <h1>{course.title}</h1>
      <h1>{course.description}</h1>
      <h1>{course.createdBy}</h1>
      <Link to={`/admin/course/lecture/${course._id}`}>
        <button>Watch Course</button>
      </Link>
    </div>
  );
};

export default CourseCard;
