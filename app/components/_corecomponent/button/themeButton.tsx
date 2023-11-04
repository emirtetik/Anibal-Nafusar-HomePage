"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className="flex items-center justify-center rounded-lg transition-all duration-500 ease-linear"
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MdLightMode className="w-8 h-8 text-orange-300" />
      ) : (
        <MdDarkMode className="w-8 h-8 text-gray-500" />
      )}
    </button>
  );
};

export default ThemeButton;
