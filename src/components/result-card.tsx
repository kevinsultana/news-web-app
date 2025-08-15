import formatDate from "@/utils/FormatDate";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa6";

export default function ResultCard({ data }: { data: SearchNews }) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg max-w-lg mx-auto overflow-hidden ">
      <div className="relative w-85 h-64">
        <Image
          src={data.multimedia.default.url || "/ks-news-logoo.png"}
          alt="Article Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="p-6 h-fit ">
        <div className="flex flex-col h-full">
          <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
            {data.headline.main}
          </h2>
          <p className="text-base text-gray-600 mb-6 leading-tight">
            {data.abstract}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="flex flex-wrap space-x-2 text-sm text-gray-500 mb-4">
            <span>{formatDate(data.pub_date)}</span>
            <span className="hidden md:inline">|</span>
            <span>{data.byline.original}r</span>
            <span className="hidden md:inline">|</span>
            <span>{data.source}</span>
          </div>
        </div>

        <div className="flex justify-start space-x-6 text-gray-500">
          <div className="flex items-center space-x-1">
            <FaHeart className="text-red-500" size={18} />
            <span>likes</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaShare size={18} />
            <span>shares</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaBookmark size={18} />
          </div>
          <Link href={data.web_url}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer text-sm text-nowrap">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
