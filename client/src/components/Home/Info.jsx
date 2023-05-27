import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";

const Info = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className="rounded-div my-8"
      >
        <h1 className="font-poppy font-[700] text-3xl text-center text-secondary">
          Welcome to <span className="text-accent block">SkillBoost</span>
        </h1>
        <p className="font-poppy font-[400] text-xl my-4 max-w-[400px] text-center">
          Hands-on projects are the most practical way to learn a programming
          language and build your portfolio. If you're tired of building "to-do"
          apps and learning theory, JS Mastery Pro can help you solidify your
          knowledge and start taking on meaningful projects that will set the
          tone for your career.
        </p>
      </motion.div>

      <motion.div className="relative pt-[56%] my-8">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          controls
        />
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className="rounded-div"
      >
        <h1 className="font-[700] text-secondary text-center text-3xl">
          Comprehensive <span className="text-accent">Project-Based</span>{" "}
          Courses to Help You Become a{" "}
          <span className="text-accent">Skilled Professional </span>
        </h1>
        <p className="my-8 text-center text-md font-[400]">
          Want to master React.js or create a stunning Web 3.0 blockchain app?
          Join other professional developers inside Filmpire where you'll build
          a Netflix clone streaming app or NFT Marketplace where you'll develop
          Cryptoket, a fully-functioning NFT platform.
        </p>
      </motion.div>
    </>
  );
};

export default Info;
