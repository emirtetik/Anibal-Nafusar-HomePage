import React from "react";
import Form from "../../_corecomponent/form";
import { Icons } from "@/app/constants";
import { FooterInfo } from "@/app/constants";
import { footerShop } from "@/app/constants";
import ThemeButton from "../../_corecomponent/button/themeButton";
import Link from "next/link";
import AosDiv from "../../_corecomponent/aosEffect";
const Footer = () => {
  return (
    <div className="mt-10 font-jacarta">
      <div className="w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t modeBorder">
          <div className="h-80 overflow-hidden">
            <AosDiv
              className=" flex flex-col justify-between h-80 border-r modeBorder"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="flex  justify-left items-center p-8">
                <h1 className="text-3xl font-light">Şikayet</h1>
              </div>
              <div className="mb-4">
                <Form />
              </div>
            </AosDiv>
          </div>
          <div className="h-80 overflow-hidden">
            <AosDiv
              className="h-80 border-r border-t  sm:border-t-0 modeBorder"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <div className="flex justify-left  items-center p-8">
                <h1 className="text-3xl font-light">Mağaza</h1>
              </div>
              <div className="flex flex-col gap-y-3  justify-left pl-8 ">
                {footerShop.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <span className="text-gray-600 hover:text-yellow-500">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </AosDiv>
          </div>

          <div className="h-80 overflow-hidden">
            <AosDiv
              className=" h-80 border-r border-t sm:border-t-0 modeBorder"
              data-aos="fade-up"
              data-aos-duration="2100"
            >
              <div className="flex justify-left items-center p-8">
                <h1 className="text-3xl font-light">Bilgi</h1>
              </div>
              <div className="flex flex-col gap-y-3 items-left justify-start pl-8 ">
                {FooterInfo.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <span className="text-gray-600 hover:text-yellow-500">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </AosDiv>
          </div>
          <div className="h-80 overflow-hidden">
            <AosDiv
              className=" h-80 border-r border-t sm:border-t-0 modeBorder"
              data-aos="fade-up"
              data-aos-duration="2800"
            >
              <div className="flex flex-col ">
                <div className="flex  justify-left  pt-8 pl-8">
                  <h1 className="text-3xl font-light">Sosyal Medya</h1>
                </div>
                <div className=" flex justify-start  p-8">
                  <ul className="flex gap-2">
                    {Icons.map((item) => (
                      <li
                        key={item.id}
                        className="text-gray-600 hover:text-yellow-500 cursor-pointer"
                      >
                        {item.icon}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-left  p-8  relative ">
                <div className="flex justify-start items-center mb-10">
                  <span className="text-md mr-2 ">Mode:</span>
                  <ThemeButton />
                </div>
                <div className="bottom-0 absolute">
                  <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
              </div>
            </AosDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
