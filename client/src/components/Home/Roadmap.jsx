import React from "react";

const Roadmap = () => {
  return (
    <div className="rounded-div my-20 md:px-20">
      <h1 className="font-[700] text-secondary text-2xl md:text-3xl">
        Get the 2022 Front-End Web Developer Roadmap
      </h1>
      <p className="my-4 ">
        This roadmap will provide you with a step-by-step journey and project
        ideas that will accelerate your career.
      </p>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="block bg-secondary rounded-2xl px-4 py-4 my-4 outline-none w-full  "
        />
        <input
          type="text"
          placeholder="Your Email"
          className="block bg-secondary rounded-2xl  px-4 py-4 my-4 outline-none w-full "
        />
        <button className="button w-full">Subscribe</button>
      </form>
    </div>
  );
};

export default Roadmap;
