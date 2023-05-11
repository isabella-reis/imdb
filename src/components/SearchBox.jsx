"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault(); // to not refresh the page when we submit our form
    if (!search) return; // if the search not exist we will return (not submit)
    router.push(`/search/${search}`); // if there's something we will use router to navigate to the /search/${whatWasSearched}
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      ></input>
      <button
        disabled={!search}
        type="submit"
        className="dark:text-white text-gray-600 hover:text-pink-300 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
