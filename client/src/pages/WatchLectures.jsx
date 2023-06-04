import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseLecture,
  getCourseLecture,
} from "../redux/slices/lectureSlice";
import Lecture from "../components/Lecture";
import Loader from "../components/Loader";

const WatchLectures = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState(null);
  const [isLectureLoading, setIsLectureLoading] = useState(false);

  const [active, setActive] = useState(null);

  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.lecture);

  if (
    user?.user?.role !== "admin" &&
    (user?.user?.subscription === undefined ||
      user?.user?.subscription?.status !== "active")
  ) {
    return <Navigate to={"/payment"} />;
  }

  const getCourseLectures = async () => {
    const response = await dispatch(getCourseLecture(courseId));
    setLectures(response.payload.lectures);
  };

  useEffect(() => {
    getCourseLectures();
  }, []);

  const getSingleLecture = (index) => {
    setIsLectureLoading(true);
    setLecture(lectures[index]);

    // Simulate loading effect with setTimeout
    setTimeout(() => {
      // Perform the desired action here, e.g., fetching the lecture data

      // Once the action is complete, set isLoading to false
      setIsLectureLoading(false);
      // Additional code...
    }, 1000); // Adjust the timeout duration as needed
  };

  // const deleteSingleLecture = async (lectureId, courseId) => {
  //   console.log(lectureId, courseId);
  //   dispatch(deleteCourseLecture({ courseId, lectureId }));
  // };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-4 px-20">
      <div className="col-span-3">
        {isLectureLoading ? (
          <Loader load={"load"} />
        ) : lecture ? (
          <Lecture lecture={lecture} />
        ) : (
          <Loader load={"load"} />
        )}
      </div>
      <div className="col-span-1 ">
        <h1 className="text-center font-bold text-3xl">Course Lectues</h1>
        {lectures && lectures.length > 0 ? (
          <div className="px-4">
            {lectures.map((lecture, index) => {
              const { title, _id } = lecture;
              return (
                <div
                  key={_id}
                  onClick={() => {
                    getSingleLecture(index);
                    setActive(title);
                  }}
                  className={
                    active == title
                      ? "bg-secondary rounded-xl px-2 border-t-4 border-b-4 border-accent cursor-pointer"
                      : "px-2 cursor-pointer"
                  }
                  // className="cursor-pointer  my-4"
                >
                  <div className="flex gap-2 py-4">
                    <h1>{index}.</h1>
                    <h1>{title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>No Lectures Found</h1>
        )}
      </div>
    </div>
  );
};

export default WatchLectures;
