import React from "react";
import { launchCourse } from "../../util/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const StartCourse = () => {
  return (
    <div className="rounded-div my-16 md:px-20 lg:px-40">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <h1 className="text-secondary font-[700] text-4xl text-center my-8 lg:text-5xl ">
          <span className="gradient-text">Launch Your Career</span> Today With{" "}
          <span className="gradient-text">SkillShare</span>
        </h1>
      </motion.div>

      <div className="md:grid grid-cols-2 gap-2">
        {launchCourse.map((item) => {
          const { id, name, url } = item;
          return (
            <div key={id}>
              <Link to={url}>
                <button className="button w-full my-4 md:text-sm">
                  {name}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartCourse;
