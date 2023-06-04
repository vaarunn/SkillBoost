import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCourseToPlaylist } from "../redux/slices/courseSlice";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  function trimSentence(sentence) {
    if (sentence.length <= 50) {
      return sentence;
    } else {
      return sentence.substring(0, 100) + "...";
    }
  }

  const handleAddToPlaylist = async (courseId) => {
    dispatch(addCourseToPlaylist(courseId));
  };

  return (
    <div className="shadow-2xl shadow-gray-900 p-4 my-8 border border-accent rounded-xl">
      <div className="grid place-items-center">
        <img className="h-40" src={course.poster.url} alt="title" />
      </div>
      <h1 className="text-sm font-bold lg:text-xl my-2">{course.title}</h1>
      <h1 className="text-sm my-2">{trimSentence(course.description)}</h1>
      <h1>
        Created By <span className="font-bold">{course.createdBy}</span>
      </h1>
      <Link to={`/course/lecture/${course._id}`}>
        <button className="button-input">Watch Course</button>
      </Link>
      <button
        onClick={() => handleAddToPlaylist(course._id)}
        className="button-input"
      >
        Add To Playlist
      </button>
    </div>
  );
};

export default CourseCard;
