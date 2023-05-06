import React from "react";
import MenuItem from "./MenuItem";
import { BiHomeHeart } from "react-icons";

export default function Header() {
  return (
    <header>
      <div className="">
        <MenuItem title={"HOME"} address="/" Icon={BiHomeHeart} />
        <MenuItem title={"HOME"} address="/" Icon={BiHomeHeart} />
      </div>
      <div className=""></div>
    </header>
  );
}
