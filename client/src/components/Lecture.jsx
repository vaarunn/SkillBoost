import React from "react";

const Lecture = ({ lecture }) => {
  console.log(lecture);
  const {
    title,
    video: { url },
    description,
  } = lecture;
  return (
    <div>
      <h1>{title}</h1>
      <video controlsList="nodownload" controls src={url}></video>
      <h1>{description}</h1>
    </div>
  );
};

export default Lecture;
