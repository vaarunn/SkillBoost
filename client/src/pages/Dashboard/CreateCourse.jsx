import React, { useState } from "react";
import dummyCourse from "../../assets/course.jpg";
import { useDispatch } from "react-redux";
import { createNewCourse } from "../../redux/slices/courseSlice";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();

  const createCourseHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("description", description);
    myForm.append("file", file);
    console.log(myForm);
    dispatch(createNewCourse(myForm));
  };

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFile(file);
      setFilePreview(reader.result);
    };
  };

  return (
    <div>
      <form onSubmit={createCourseHandler}>
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
            setCategory(e.target.value);
          }}
          placeholder="category"
        />
        <input
          type="text"
          onChange={(e) => {
            setCreatedBy(e.target.value);
          }}
          placeholder="created by"
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="description"
        />
        <input type="file" onChange={changeImageHandler} />
        <img
          className="w-[250px] h-[250px]"
          src={filePreview || dummyCourse}
          alt=""
        />
        <button>Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
