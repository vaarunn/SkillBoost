import React from "react";
import { motion } from "framer-motion";
import lottieHero from "../../assets/lottieFiles/lottieCourse.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="z-0 px-4  my-2 md:px-20 lg:flex items-center justify-center lg:my-3  lg:py-8">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className=""
      >
        <h1 className=" font-poppy text-secondary font-[700] text-5xl md:my-4 lg:max-w-[500px] py-12 lg:my-2 lg:py-6 lg:text-6xl">
          Launch Your Dev Career With{" "}
          <span className="gradient-text">Project-Based</span> Coaching
        </h1>
        <h3 className="font-poppy text-xl md:my-4 lg:my-2">
          Showcase your skills with practical development experience and land
          the coding career of your dreams
        </h3>
        <Link to="/courses">
          <button className="button mt-6 ">Explore Courses</button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className="mt-16"
      >
        <Player src={lottieHero} loop autoplay />
      </motion.div>
    </div>
  );
};

export default Hero;
