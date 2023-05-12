import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteCourseLecture,
  getCourseLecture,
} from "../redux/slices/lectureSlice";
import Lecture from "../components/Lecture";
const WatchLectures = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState(null);

  const getCourseLectures = async () => {
    const response = await dispatch(getCourseLecture(courseId));
    setLectures(response.payload.lectures);
  };

  useEffect(() => {
    getCourseLectures();
  }, []);

  const getSingleLecture = async (index) => {
    setLecture(lectures[index]);
  };

  const deleteSingleLecture = async (lectureId, courseId) => {
    console.log(lectureId, courseId);
    dispatch(deleteCourseLecture({ courseId, lectureId }));
  };

  return (
    <div>
      {lectures && lectures.length > 0 ? (
        <div>
          <div>
            {lectures.map((lecture, index) => {
              const { title, _id } = lecture;
              return (
                <div key={_id}>
                  <h1>{title}</h1>
                  <button
                    className="bg-green-400"
                    onClick={() => {
                      getSingleLecture(index);
                    }}
                  >
                    Open Lecture
                  </button>
                  <button
                    onClick={() => deleteSingleLecture(_id, courseId)}
                    className="bg-red-500"
                  >
                    Delete Lecture
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>No Lectures Found</h1>
      )}
      <div>
        {lecture ? <Lecture lecture={lecture} /> : <h1>No Lecture Selected</h1>}
      </div>
    </div>
  );
};

export default WatchLectures;
