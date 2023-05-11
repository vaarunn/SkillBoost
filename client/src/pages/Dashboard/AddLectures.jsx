import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { addCourseLecture } from "../../redux/slices/lectureSlice";

const AddLectures = () => {
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const dispatch = useDispatch();

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
    <div>
      <h1>{courseId}</h1>
      <form onSubmit={addLecturesHandler}>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="description"
        />
        <input type="file" onChange={changeVideoHandler} accept="video/mp4" />

        {videoPrev && (
          <video
            className="w-[500px] h-[500px]"
            controlsList="nodownload"
            controls
            src={videoPrev}
          ></video>
        )}
        <button>Add Lectures</button>
      </form>
    </div>
  );
};

export default AddLectures;
