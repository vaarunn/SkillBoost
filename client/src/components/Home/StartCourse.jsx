import React from "react";
import { launcCourse } from "../../util/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const StartCourse = () => {
  return (
    <div className="rounded-div my-16 md:px-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <h1 className="text-secondary font-[700] text-4xl text-center my-8">
          <span>Launch Your Career</span> Today With{" "}
          <span className="text-accent">SkillShare</span>
        </h1>
      </motion.div>

      <div className="md:grid grid-cols-2 gap-2">
        {launcCourse.map((item) => {
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
