import React from "react";
import Left from "./left";
import Right from "./right";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mt-16 ">
      <div className=" w-full md:w-1/2 ">
        <Left />
      </div>
      <div className=" w-full md:w-1/2 flex justify-center ">
        <Right />
      </div>
    </div>
  );
};

export default Hero;
