"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const  [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && (currentTheme === "dark" ? (
        <MdOutlineLightMode
          className="text-xl cursor-pointer hover:text-pink-300"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdOutlineDarkMode
          className="text-xl cursor-pointer hover:text-pink-300"
          onClick={() => setTheme("dark")}
        />
      ))}
    </>
  );
}
