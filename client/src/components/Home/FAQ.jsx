import React, { useState } from "react";

import { faq } from "../../util/data";
import { motion } from "framer-motion";

const FAQ = () => {
  const [clicked, setIsCliced] = useState(null);

  const handleClicked = (id) => {
    if (id === clicked) {
      return setIsCliced(null);
    }
    setIsCliced(id);
  };

  return (
    <div className="rounded-div my-8 md:px-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <h1 className="text-secondary font-[700] text-3xl text-center my-8 md:text-4xl">
          Frequently Asked Questions
        </h1>
      </motion.div>
      {faq.map((item) => {
        const { id, question, answer } = item;
        return (
          <div
            key={id}
            className="my-16  cursor-pointer text-xl font-bold md:rounded-div-md border-b border-spacing-y-6"
            onClick={() => {
              handleClicked(id);
            }}
          >
            <div className="flex justify-between ">
              <h1>{question}</h1>
              {clicked === id ? <p>-</p> : <p>+</p>}
            </div>
            <div className={clicked === id ? "block " : "hidden "}>
              <p className="text-sm my-2 ">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
