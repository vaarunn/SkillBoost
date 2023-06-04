import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseLecture,
  getCourseLecture,
} from "../redux/slices/lectureSlice";
import Lecture from "../components/Lecture";
import Loader from "../components/Loader";

import { Player } from "@lottiefiles/react-lottie-player";
import lectureLottie from "../assets/lottieFiles/lectures.json";

import { AiFillBook } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const WatchLectures = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState(null);
  const [isLectureLoading, setIsLectureLoading] = useState(false);

  const [nav, setNav] = useState(false);

  const toogleSidebar = () => {
    setNav(!nav);
  };

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-4 lg:grid grid-cols-4 md:px-20">
      <div
        className="flex gap-2  items-center cursor-pointer lg:hidden p-8"
        onClick={toogleSidebar}
      >
        <AiFillBook size={20} />
        <p className="text-sm md:text-xl">Course Lectures</p>
      </div>
      <div className="col-span-3">
        {active === null ? (
          <div>
            <Player src={lectureLottie} loop autoplay style={{ height: 500 }} />
          </div>
        ) : isLectureLoading ? (
          <Loader load="load" />
        ) : lecture ? (
          <Lecture lecture={lecture} />
        ) : (
          <Loader load="load" />
        )}
      </div>

      {/* sidebar  */}

      <div
        className={
          nav
            ? " fixed left-0 top-[15%] w-[100%] sm:w-[60%] md:w-[45%] h-full bg-secondary  p-10  ease-in duration-700 z-10 rounded-xl"
            : " bg-primary top-[15%] fixed left-[-250%]  p-10 ease-in duration-700  z-10"
        }
      >
        <div className=" col-span-1 bg-secondary h-screen w-full rounded-xl">
          <div className="flex items-center justify-between p-8">
            <h1 className=" font-bold ">Course Lectures</h1>
            <div
              className="cursor-pointer text-primary"
              onClick={toogleSidebar}
            >
              <MdClose size={30} />
            </div>
          </div>
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
                    <div
                      className="flex gap-2 py-4 border-b border-gray-400"
                      onClick={toogleSidebar}
                    >
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

      <div className="hidden lg:block col-span-1 bg-secondary h-screen  rounded-xl">
        <h1 className="text-center font-bold text-3xl py-8">Course Lectures</h1>
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
                      ? "bg-secondary rounded-xl px-2 border-t-4 border-b-4 border-accent cursor-pointer "
                      : "px-2 cursor-pointer"
                  }
                  // className="cursor-pointer  my-4"
                >
                  <div className="flex gap-2 py-4 border-b border-gray-400">
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
