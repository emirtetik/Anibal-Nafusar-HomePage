"use client"
import React, { useState } from "react";
import Navigation from "./navigation";
import Logo from "../../logo";
import Search from "../../_corecomponent/search";
import ThemeButton from "../../_corecomponent/button/themeButton";
const Header = () => {
  return (
    <header
      className="pt-12 flex justify-evenly items-center header-div textColor" >
      <div>
        <Navigation />
      </div>
      <div className="">
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
