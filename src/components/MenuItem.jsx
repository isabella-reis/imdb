import Link from "next/link";
import React from "react";
import { Home } from "carbon-components";

export default function MenuItem({ title, address}) {
  return (
    <div>
      <Link href={`${address}`}>
        <Home/>
        <p>{title}</p>
      </Link>
    </div>
  );
}
