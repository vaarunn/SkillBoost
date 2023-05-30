import React from "react";
import { students } from "../../util/Data";
import { motion } from "framer-motion";

const Students = () => {
  return (
    <div className="rounded-div my-20 md:px-20">
      <h1
        className="font-[700] text-center text-3xl text-secondary md:text-4xl lg:text-5xl
      "
      >
        Our <span className="text-accent">Global Students</span> Say It Best
      </h1>
      <div className="lg:grid grid-cols-2 gap-4">
        {students.map((item) => {
          const { id, img, name, position, review } = item;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2, bounce: 0.3 }}
              className="card "
            >
              <div className="flex justify-between items-center">
                <img className="w-20 h-20 rounded-full" src={img} alt={id} />
                <p className="text-xl">🌟🌟🌟🌟🌟</p>
              </div>

              <h1 className="font-bold text-secondary mt-2">{name}</h1>
              <p className="text-xs">{position}</p>
              <p className="my-4">{review}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Students;
