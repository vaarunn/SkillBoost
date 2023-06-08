import React from "react";
import Marquee from "react-fast-marquee";
import { carasoulImages } from "../../util/data.js";

const Carasoul = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-poppy my-8 text-xl font-bold text-secondary ">
          SkillBoost Is Trusted By
        </h1>
      </div>
      <Marquee speed={100} pauseOnHover={true}>
        {carasoulImages.map((item) => {
          const { id, source } = item;
          return (
            <div key={id} className="mx-10 ">
              <img
                className="bg-secondary px-6 py-2 rounded-xl w-[250px] h-[100px]"
                src={source}
                alt={id}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Carasoul;
