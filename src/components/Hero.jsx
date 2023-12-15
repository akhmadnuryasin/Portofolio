import React from "react";

const Hero = (props) => {
  return (
    <div className="w-screen py-[64px] tablet:px-[84px] px-[43px]  bg-white flex justify-start items-start">
      <div className="tablet:mx-[61px] flex">
        <div className="tablet:w-[50%]">
          <h1 className="tablet:text-[6.5rem] text-[3rem] tablet:text-8xl font-bold text-[#333333] mb-4 tracking-tighter leading-tight">
            {props.page}.
          </h1>
          <p className="mb-6 text-[#757575] text-[2.2rem] font-thin leading-tight">
            {props.title}
          </p>
          <p className="text-[1.2rem] mb-6 font-thin">{props.desc}</p>
        </div>
        <div className="tablet:w-[50%]"></div>
      </div>
    </div>
  );
};

export default Hero;
