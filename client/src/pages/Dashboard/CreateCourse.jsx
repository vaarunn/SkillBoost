import React, { useState, useEffect } from "react";
import dummyCourse from "../../assets/course.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewCourse,
  resetErrorMessage,
  resetSuccessMessage,
} from "../../redux/slices/courseSlice";

import { showToastError, showToastSuccess } from "../../util/showToast";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector((state) => state.course);
  console.log(successMessage, errorMessage);

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

  return (
    <div className="md:grid place-items-center mt-8 ">
      <div className=" px-20 lg:max-w-[70%]">
        <form
          onSubmit={createCourseHandler}
          className="p-6 shadow-gray-900   shadow-2xl "
        >
          <div className="grid place-items-center">
            <h1 className="font-bold text-2xl mb-2">Create Course</h1>
            <img
              className="w-32 h-28 md:w-48 md:h-32 "
              src={filePreview || dummyCourse}
              alt=""
            />
          </div>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
            className="input"
          />
          <input
            type="text"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="category"
            className="input"
          />
          <input
            type="text"
            onChange={(e) => {
              setCreatedBy(e.target.value);
            }}
            placeholder="created by"
            className="input"
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
            onChange={changeImageHandler}
            className="text-sm
            file:mr-5 file:py-3 file:px-2
            file:rounded-full file:border-0
            file:text-md file:font-semibold  
            file:bg-secondary file:text-secondary
            md:file:px-10
            hover:file:cursor-pointer hover:file:opacity-80"
          />

          <button className="button-input">Create Course</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
