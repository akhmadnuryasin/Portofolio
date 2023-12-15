import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[19%] mx-2 my-4 overflow-hidden bg-white rounded-md ring-1 drop-shadow-sm ring-[#e7e7e7] hover:drop-shadow-lg duration-500 dark:bg-gray-800">
      <Link to="">
        <img
          className="object-cover w-full h-[60%] rounded-t-md"
          src={props.source}
          alt="Article"
        />
      </Link>
      <div className="p-4">
        <p className="mb-1 text-base">{props.title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{props.tag}</p>
      </div>
    </div>
  );
};

export default Card;
