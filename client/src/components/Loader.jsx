import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  const color = "#4690eb";
  return (
    <div className="h-screen w-full grid place-items-center">
      <RingLoader color={color} size={200} />
    </div>
  );
};

export default Loader;
