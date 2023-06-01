import React from "react";
import RingLoader from "react-spinners/RingLoader";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = ({ load }) => {
  const color = "#4690eb";
  return (
    <div className="h-[500px] flex items-center justify-center ">
      {load ? (
        <FadeLoader color={color} size={50} />
      ) : (
        <RingLoader color={color} size={100} />
      )}
    </div>
  );
};

export default Loader;
