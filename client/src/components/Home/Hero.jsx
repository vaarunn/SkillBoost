import React from "react";
import { motion } from "framer-motion";
import lottieHero from "../../assets/lottieCourse.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  return (
    <div className="z-0  my-2 md:px-20 lg:flex items-center justify-center lg:my-24">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className=""
      >
        <h1 className="font-poppy text-secondary font-[700] text-5xl my-4 lg:max-w-[500px] py-12 lg:my-2 lg:py-6 lg:text-6xl">
          Launch Your Dev Career With{" "}
          <span className="text-accent">Project-Based</span> Coaching
        </h1>
        <h3 className="font-poppy text-xl my-4 lg:my-2">
          Showcase your skills with practical development experience and land
          the coding career of your dreams
        </h3>
        <button className="button lg:mt-6">Explore Courses</button>
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
