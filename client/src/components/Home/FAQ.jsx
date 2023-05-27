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
    <div className="rounded-div">
      {faq.map((item) => {
        const { id, question, answer } = item;
        return (
          <div
            key={id}
            className="border cursor-pointer"
            onClick={() => {
              handleClicked(id);
            }}
          >
            <div className="flex justify-between">
              <h1>{question}</h1>
              <p>+</p>
            </div>
            <div className={clicked === id ? "block " : "hidden "}>
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
