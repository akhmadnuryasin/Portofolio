import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-[314px] h-[290px] inline-block overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 px-[6px] pt-[6px]">
      <div className="bg-[#f5f6fa] px-5 pt-5 rounded">
        <Link to="">
          <img
            className="object-cover w-full h-[184px] rounded"
            src={props.source}
            alt="Article"
          />
        </Link>
      </div>
      <div className="py-[16px] pl-[16px] pr-[40px] h-[44px]">
        <p className="mb-1 text-base">{props.title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{props.tag}</p>
      </div>
    </div>
  );
};

export default Card;
