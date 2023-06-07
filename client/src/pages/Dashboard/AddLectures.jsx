import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addCourseLecture,
  resetErrorMessage,
  resetSuccessMessage,
} from "../../redux/slices/lectureSlice";
import { useSelector } from "react-redux";
import { showToastError, showToastSuccess } from "../../util/customToast";

const AddLectures = () => {
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector(
    (state) => state.lecture
  );

  const addLecturesHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    const lectureData = {
      myForm,
      courseId,
    };
    dispatch(addCourseLecture(lectureData));
  };

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

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  return (
    <div className="md:grid place-items-center mt-8 ">
      <div className=" px-20 lg:max-w-[70%] ">
        <h1 className="text-center my-4">
          <span className="font-bold">CourseId: </span>
          {courseId}
        </h1>
        <form
          className="p-6 shadow-gray-900 bg-primary  shadow-2xl overflow-x-hidden"
          onSubmit={addLecturesHandler}
        >
          <div className="grid place-items-center">
            {videoPrev ? (
              <video
                className="w-32 h-28 md:w-48 md:h-32 lg:w-60 lg:h-[48]"
                controlsList="nodownload"
                controls
                src={videoPrev}
              ></video>
            ) : (
              <h1>Add Video To see Preview</h1>
            )}
          </div>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
            className="input "
          />
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
            className="input"
          />
          <input
            type="file"
            onChange={changeVideoHandler}
            accept="video/mp4"
            className="text-sm
            file:mr-5 file:py-3 file:px-2
            file:rounded-full file:border-0
            file:text-md file:font-semibold  
            file:bg-secondary file:text-secondary
            md:file:px-10
            hover:file:cursor-pointer hover:file:opacity-80"
          />

          <button className="button-input ">Add Lectures</button>
        </form>
      </div>
    </div>
  );
};

export default AddLectures;
