import React, { useState } from "react";

import { faq } from "../../util/data";

const FAQ = () => {
  const [clicked, setIsCliced] = useState(null);

  const handleClicked = (id) => {
    if (id === clicked) {
      return setIsCliced(null);
    }
    setIsCliced(id);
  };

  return (
    <div className="rounded-div my-8">
      <h1 className="text-secondary font-[700] text-3xl text-center my-8">
        Frequently Asked Questions
      </h1>
      {faq.map((item) => {
        const { id, question, answer } = item;
        return (
          <div
            key={id}
            className="my-16  cursor-pointer text-xl font-bold"
            onClick={() => {
              handleClicked(id);
            }}
          >
            <div className="flex justify-between">
              <h1>{question}</h1>
              {clicked ? <p>-</p> : <p>+</p>}
            </div>
            <div className={clicked === id ? "block " : "hidden "}>
              <p className="text-sm my-2">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
