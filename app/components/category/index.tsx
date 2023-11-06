import Image from "next/image";
import Link from "next/link";
import React from "react";
import AosDiv from "../_corecomponent/aosEffect";

const Category = () => {
  return (
    <div className="flex  mt-10 justify-end">
      <AosDiv className=" flex justify-center items-center" data-aos="fade-right" data-aos-duration="1000">
        <Image src={"/images/category/woman.png"} alt="woman" width={350} height={300} />
      </AosDiv>
      <AosDiv className="flex sm:flex-row flex-col  justify-left font-jacarta items-center header-div textColor w-1/3 sm:w-full h-auto md:h-52 rounded-l-3xl py-6 px-4 gap-4 sm:gap-20" data-aos="fade-left" data-aos-duration="1000">
        <h4 className="text-xl lg:text-3xl md:text-2xl  font-extrabold"  >
        Kategori
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3" >
          <Image
            alt="category"
            src={"/images/category/Shirt-landing.png"}
            width={120}
            height={70}
          />
          <div>
            <h2 className="text-xl font-bold">Giyim</h2>
            <Link
              href={"/"}
              className="text-sm text-gray-400 hover:text-yellow-400 font-bold"
            >
              Daha fazla
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Image
            alt="category"
            src={"/images/category/Sunglasses-landing.png"}
            width={130}
            height={70}
          />
          <div>
            <h2 className="text-xl font-bold">Güneş Gözlüğü</h2>
            <Link
              href={"/"}
              className="text-sm text-gray-400 hover:text-yellow-400 font-bold"
            >
              Daha fazla
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Image
            alt="category"
            src={"/images/category/Shoe-landing.png"}
            width={120}
            height={70}
          />
          <div>
            <h2 className="text-xl font-bold">Ayakkabı</h2>
            <Link
              href={"/"}
              className="text-sm text-gray-400 hover:text-yellow-400 font-bold"
            >
              Daha fazla
            </Link>
          </div>
        </div>
      </AosDiv>
    </div>
  );
};

export default Category;
