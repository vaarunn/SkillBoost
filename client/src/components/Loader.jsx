import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  const color = "#4690eb";
  return (
    <div className="h-[500px] flex items-center justify-center ">
      <RingLoader color={color} size={100} />
    </div>
  );
};

export default Loader;
