import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-full h-[240px] sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[19%] overflow-hidden bg-white rounded-md ring-1 drop-shadow-sm ring-[#e7e7e7] hover:drop-shadow-lg duration-500 dark:bg-gray-800">
      <div className="p-4 w-full h-full flex justify-center items-center">
        <p className="text-2xl">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
