import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Lecture = ({ lecture }) => {
  const {
    title,
    video: { url },
    description,
  } = lecture;

  return (
    <div>
      <div className=" relative pt-[56%] my-8 lg:my-0 ">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          controls
        />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>

      <h1 className="text-xl ">{description}</h1>
    </div>
  );
};

export default Lecture;
