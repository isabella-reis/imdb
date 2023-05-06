import React from "react";
import MenuItem from "./MenuItem";
import { BiHomeHeart, BiInfoCircle } from "react-icons/bi";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title={"HOME"} address="/" Icon={BiHomeHeart} />
        <MenuItem title={"ABOUT"} address="/about" Icon={BiInfoCircle} />
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-fuchsia-600 py-1 px-2 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline mr-1">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}
