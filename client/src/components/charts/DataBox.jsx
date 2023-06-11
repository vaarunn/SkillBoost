import React from "react";
import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <div className="w-full border border-accent my-4 md:w-1/5 shadow-md p-8 rounded-lg overflow-x-hidden">
    <p className="font-medium">{title}</p>

    <div className="flex items-center space-x-6">
      <p className="text-2xl font-bold">{qty}</p>

      <div className="flex items-center">
        <p>{`${qtyPercentage}%`}</p>
        {profit ? (
          <RiArrowUpLine className="text-green-500" />
        ) : (
          <RiArrowDownLine className="text-red-500" />
        )}
      </div>
    </div>
    <p className="opacity-60">Since Last Month</p>
  </div>
);

export default Databox;
