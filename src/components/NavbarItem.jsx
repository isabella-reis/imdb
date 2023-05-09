"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`m-4 font-semibold p-2 hover:text-pink-300 ${
          //OBS.: our genre is our params, our params is "fetchTrending" or "fetchTopRated", we defined it in the NavbarItem.
          // if the genre exist, check to what params it is equal and then apply the style
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-pink-300 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </div>
  );
}

// https://api.themovieddb.org/3/trending/movie/week?api_key=9416fdf69c2f1340fd59145df5f1f2b2