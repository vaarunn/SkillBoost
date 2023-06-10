import React from "react";
import { disclaimer } from "../util/data";

const Disclaimer = () => {
  return (
    <div className="px-4 md:px-20">
      <h1 className="font-bold text-3xl">Disclaimer</h1>
      {disclaimer.map((item) => {
        const { id, data } = item;
        return (
          <ul key={id} className="text-xl mt-4">
            <li>{data}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Disclaimer;
