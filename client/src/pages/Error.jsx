import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import error from "../assets/404.json";

const Error = () => {
  return (
    <div>
      <Player
        src={error}
        loop
        autoplay
        style={{
          // top: "30%",
          // right: "35%",
          width: "100%",
          height: "80%",
          overflow: "hidden",
          position: "fixed",
        }}
      />
    </div>
  );
};

export default Error;
