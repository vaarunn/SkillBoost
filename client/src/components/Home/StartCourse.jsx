import React from "react";
import { launcCourse } from "../../util/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const StartCourse = () => {
  return (
    <div className="rounded-div my-16">
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

      <div>
        {launcCourse.map((item) => {
          const { id, name, url } = item;
          return (
            <div key={id}>
              <Link to={url}>
                <button className="button w-full my-4">{name}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartCourse;
