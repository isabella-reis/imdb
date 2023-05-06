import React from "react";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <header>
      <div className="">
        <MenuItem title={"HOME"} address="/"/>
        <MenuItem title={"HOME"} address="/"/>
      </div>
      <div className=""></div>
    </header>
  );
}
