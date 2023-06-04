import React from "react";
import { features } from "../../util/Data";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <div className="rounded-div my-16 ">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        className="md:px-20 lg:my-20 "
      >
        <h1 className="text-secondary font-[700] text-4xl text-center my-8 lg:text-5xl">
          Ditch Theory-Driven Courses and{" "}
          <span className="gradient-text">Enter the World</span> of a{" "}
          <span className="gradient-text">True Developer</span>
        </h1>
      </motion.div>
      <div className="md:px-20 lg:grid grid-cols-2 gap-4">
        {features.map((item) => {
          const { id, title, subTitle, icon } = item;
          return (
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", duration: 1, bounce: 0.3 }}
              key={id}
              className="my-16 rounded-xl px-4 py-8 hover:bg-secondary duration-150 lg:my-4"
            >
              <p>{icon}</p>
              <h1 className="text-secondary my-4 font-bold text-xl">{title}</h1>
              <p>{subTitle}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
