import React from "react";
import { faq } from "../../util/data";
const FAQ = () => {
  return (
    <div>
      {faq.map((item) => {
        const { id, question, answer } = item;
        return <div key={id}></div>;
      })}
    </div>
  );
};

export default FAQ;
