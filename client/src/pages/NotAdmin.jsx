import React from "react";
import notAdmin from "../assets/401.json";
import { Player } from "@lottiefiles/react-lottie-player";

const NotAdmin = () => {
  return (
    <div>
      <Player
        src={notAdmin}
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
      <h1 className="text-center font-bold text-xl md:text-3xl lg:4xl text-red-600">
        NOt Authorized To View This Page
      </h1>
    </div>
  );
};

export default NotAdmin;
