import React from "react";
import { features } from "../../util/Data";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <div
      className="rounded-div 
    my-16"
    >
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <h1 className="text-secondary font-[700] text-4xl text-center my-8">
          Ditch Theory-Driven Courses and{" "}
          <span className="text-accent">Enter the World</span> of a{" "}
          <span className="text-accent">True Developer</span>
        </h1>
      </motion.div>
      <div>
        {features.map((item) => {
          const { id, title, subTitle, icon } = item;
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, bounce: 0.3 }}
              key={id}
              className="my-16"
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
