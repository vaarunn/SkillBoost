import React from "react";
import { features } from "../../util/Data";

const Features = () => {
  return (
    <div className="rounded-div my-16">
      <h1 className="text-secondary font-[700] text-4xl text-center my-8">
        Ditch Theory-Driven Courses and{" "}
        <span className="text-accent">Enter the World</span> of a{" "}
        <span className="text-accent">True Developer</span>
      </h1>
      <div>
        {features.map((item) => {
          const { id, title, subTitle, icon } = item;
          return (
            <div
              className="rounded-xl px-4 py-8 my-4 hover:bg-secondary transition-all duration-150"
              key={id}
            >
              <p>{icon}</p>
              <h1 className="text-secondary my-4 font-bold text-xl">{title}</h1>
              <p>{subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
