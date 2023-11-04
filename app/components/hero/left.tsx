import React from "react";
import Image from "next/image";
import { AiFillPlaySquare } from "react-icons/ai";
import Link from "next/link";
const Left = () => {
  return (
    <div className="font-jacarta mt-8 flex flex-col">
      <div className="p-3">
        <span className="text-fourth  text-2xl font-extrabold tracking-wider uppercase mb-4 ">
          TREND COLLECTİONS
        </span>
        <h6 className="uppercase font-extrabold text-5xl sm:text-8xl -tracking-[4.5px] ">
          Dresses to Be noticed
        </h6>
      </div>
      <div className="mt-10  relative">
        <div className="w-1  h-20 bg-red-500 absolute mt-3"></div>
        <p className=" leading-8 text-md max-w-[85%] sm:m-4 sm:text-lg m-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quo, voluptas sed officiis.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row ">
        <Link href={"/"}>
          <div className="m-5 mt-10 flex items-center  rounded-full w-[250px] shadow-dark custom-div">
            <div className="flex items-center m-4">
              <Image
                src="/assets/trend.png"
                width={100}
                height={100}
                alt="trendyol"
              />
              <span className=" ml-4 mt-2 font-bold text-md uppercase textColor">
                shop now
              </span>
            </div>
          </div>
        </Link>
        <div className="flex justify-start items-center sm:justify-center mb-12 sm:mb-0">
          <button className=" ml-4 mt-5 font-bold text-lg uppercase">
            <span className="flex  items-center justify-center ">
              <AiFillPlaySquare className="w-10 h-10" />
              Whats Trending?
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
