import React from "react";
import Image from "next/image";
import { AiFillPlaySquare } from "react-icons/ai";
import Link from "next/link";
import AosDiv from "../_corecomponent/aosEffect";
const Left = () => {
  return (
    <div className="font-jacarta mt-8 flex flex-col">
      <AosDiv className="p-3" data-aos="fade-right" data-aos-duration="1500">
        <span className="text-fourth text-xl sm:text-2xl font-extrabold tracking-wider uppercase mb-4 ">
          TREND Koleksiyonları
        </span>
        <h6 className="uppercase font-extrabold text-5xl sm:text-8xl tracking-[2px] mt-3 leading-tight sm:leading-snug">
          STİLİNİZLE ÖNE çIKIN
        </h6>
      </AosDiv>
      <AosDiv className="mt-10  relative ml-1" data-aos="fade-right" data-aos-duration="1500">
        <div className="w-1  h-20 bg-red-500 absolute mt-4"></div>
        <p className=" leading-8 text-md max-w-[85%] sm:m-4 sm:text-lg m-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quo, voluptas sed officiis.
        </p>
      </AosDiv>
      <AosDiv className="flex flex-col sm:flex-row " data-aos="fade-right" data-aos-duration="1500">
        <Link href={"/"}>
          <div className="m-5 mt-10 flex items-center  rounded-full w-[250px] shadow-dark custom-div">
            <div className="flex items-center m-4">
              <Image
                src="/images/hero/trend.png"
                width={100}
                height={100}
                alt="trendyol"
              />
              <span className=" ml-4 mt-2 font-bold text-md uppercase textColor transition-colors hover:text-yellow-400">
                shop now
              </span>
            </div>
          </div>
        </Link>
        <div className="flex justify-start items-center sm:justify-center mb-12 sm:mb-0">
          <button className=" ml-6 mt-5 font-bold text-lg hover:text-yellow-400 transition-colors">
            <span className="flex  items-center justify-center ">
              <AiFillPlaySquare className="w-10 h-10 mr-3" />
              Trendlerde ne var?
            </span>
          </button>
        </div>
      </AosDiv>
    </div>
  );
};

export default Left;
