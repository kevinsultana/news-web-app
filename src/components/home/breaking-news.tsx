"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function BreakingNews({ data }: { data: News[] }) {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div className="bg-red-700 text-white py-2">
      <div className="flex justify-center items-center gap-8">
        <Link href={data[1].url}>
          <div
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className="bg-white text-red-700 p-2 transition-all duration-300 cursor-pointer hover:bg-red-500 hover:text-white"
          >
            {onHover ? "Read More" : "Breaking News"}
          </div>
        </Link>

        <div>
          <h1>{data[1].title}</h1>
          <p>{data[1].abstract}</p>
        </div>
      </div>
    </div>
  );
}
