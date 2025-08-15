import formatDate from "@/utils/FormatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa6";

export default function Hero({ data }: { data: News[] }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <Image
        src={
          data[0].multimedia?.find(
            (item) =>
              item.format === "mediumThreeByTwo440" ||
              item.format === "Super Jumbo" ||
              item.format === "threeByTwoSmallAt2X"
          )?.url ?? "/ks-news-logoo.png"
        }
        alt="KS News Logo"
        width={1000}
        height={1000}
        className="w-full lg:w-1/3 h-auto object-contain bg-amber-200"
      />
      <div className="text-black md:p-12  lg:max-w-1/2">
        <div className="">
          {/* Header dan Ikon Aksi */}
          <div className="flex justify-between items-center mb-2 md:mb-6">
            <span className="text-red-500 font-bold uppercase">
              {data[0].section}
            </span>
            <div className="flex space-x-6 text-gray-400">
              <FaRegHeart
                className="cursor-pointer hover:text-blue-500"
                size={20}
              />
              <FaShareAlt
                className="cursor-pointer hover:text-blue-500"
                size={20}
              />
              <FaRegBookmark
                className="cursor-pointer hover:text-blue-500"
                size={20}
              />
            </div>
          </div>

          {/* Judul Utama */}
          <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2 md:mb-6">
            {data[0].title}
          </h1>

          {/* Subjudul/Deskripsi Awal */}
          <p className="text-base md:text-xl text-gray-800 font-light mb-2 md:mb-8">
            {data[0].abstract}
          </p>

          {/* Tombol Baca Selengkapnya */}
          <div className="flex flex-col space-y-1 lg:items-center md:flex-row md:space-x-4 text-sm text-gray-600">
            <span>{formatDate(data[0].published_date)}</span>
            <span className="hidden md:inline">|</span>
            <span>{data[0].byline}</span>
            <span className="hidden md:inline">|</span>
            <span>{data[0].source}</span>
            <span className="hidden md:inline">|</span>
            <Link href={data[0].url}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
