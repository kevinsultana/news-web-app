import Image from "next/image";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa6";

export default function NewsCard() {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg max-w-lg mx-auto overflow-hidden ">
      <div className="relative w-85 h-64">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Article Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          title
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">summary</p>

        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="flex flex-wrap space-x-2 text-sm text-gray-500 mb-4">
            <span>timeAgo</span>
            <span className="hidden md:inline">|</span>
            <span>By author</span>
            <span className="hidden md:inline">|</span>
            <span>readTime read</span>
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
        </div>
      </div>
    </div>
  );
}
