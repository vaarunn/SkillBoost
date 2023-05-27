import React from "react";
import { motion } from "framer-motion";
import lottieHero from "../../assets/lottieCourse.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  return (
    <div className="z-0 rounded-div my-2 md:flex justify-between items-center">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <h1 className="font-poppy text-secondary font-[700] text-5xl my-4">
          Launch Your Dev Career With{" "}
          <span className="text-accent">Project-Based</span> Coaching
        </h1>
        <h3 className="font-poppy text-xl my-4">
          Showcase your skills with practical development experience and land
          the coding career of your dreams
        </h3>
        <button className="button">Explore Courses</button>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className="my-2 "
      >
        <Player src={lottieHero} loop autoplay />
      </motion.div>
    </div>
  );
};

export default Hero;
