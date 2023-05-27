import React, { useState } from "react";
import { faq } from "../../util/data";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { calcLength } from "framer-motion";

const FAQ = () => {
  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (id) => {
    if (id === isClicked) {
      return setIsClicked(null);
    }
    setIsClicked(id);
    console.log(isClicked);
    console.log(id === isClicked);
  };

  const open = "block ";
  const close = "hidden";

  return (
    <div className="rounded-div">
      {faq.map((item) => {
        const { id, question, answer } = item;
        return (
          <div className="border my-6">
            <div className="flex justify-between">
              <h1>{question}</h1>
              <button
                onClick={() => {
                  handleClick(id);
                }}
              >
                <FiPlus key={id} />
              </button>
            </div>
            <p className={isClicked === id ? open : close}>{answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
