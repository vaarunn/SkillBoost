import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  function trimSentence(sentence) {
    if (sentence.length <= 50) {
      return sentence;
    } else {
      return sentence.substring(0, 100) + "...";
    }
  }

  return (
    <div className="shadow-2xl p-4">
      <div className="grid place-items-center">
        <img className="h-40" src={course.poster.url} alt="title" />
      </div>
      <h1 className="font-bold text-xl my-2">{course.title}</h1>
      <h1 className="text-sm my-2">{trimSentence(course.description)}</h1>
      <h1>
        Created By <span className="font-bold">{course.createdBy}</span>
      </h1>
      <Link to={`/admin/course/lecture/${course._id}`}>
        <button className="button-input">Watch Course</button>
      </Link>
    </div>
  );
};

export default CourseCard;
