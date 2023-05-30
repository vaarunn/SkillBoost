import React from "react";

const Roadmap = () => {
  return (
    <div className="rounded-div my-20 md:px-20 lg:px-40">
      <h1 className="font-[700] text-secondary text-2xl md:text-3xl lg:text-4xl">
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
          className="block bg-secondary rounded-2xl px-4 py-4 my-4 outline-none w-full lg:inline lg:w-fit m-2"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="block bg-secondary rounded-2xl  px-4 py-4 my-4 outline-none w-full lg:inline lg:w-fit m-2"
        />
        <button className="button w-full lg:w-fit m-2">Subscribe</button>
      </form>
    </div>
  );
};

export default Roadmap;
