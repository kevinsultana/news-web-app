"use client";
import { categories } from "@/constant/categories";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState<boolean>(false);

  return (
    <nav className=" mx-auto bg-white p-4 shadow-md ">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <p className="flex items-center">
              <Image
                src="/ks-news-logoo.png"
                alt="KS News Logo"
                className="h-8 w-auto mr-2"
                width={50}
                height={50}
              />
              <span className="font-bold text-lg text-black">NEWS</span>
            </p>
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {categories.slice(0, 5).map((category, index) => (
            <Link key={index} href={`/category/${category}`}>
              <p className="text-gray-700 hover:text-blue-600 capitalize">
                {category}
              </p>
            </Link>
          ))}
          <div className="relative">
            <button
              onMouseEnter={() => setIsShowMoreOpen(true)}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Show more
              <span>
                {isShowMoreOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {isShowMoreOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-lg py-2 z-10 w-40">
                {categories.slice(5).map((category, index) => (
                  <Link
                    key={index}
                    href={`/category/${category}`}
                    onClick={() => setIsShowMoreOpen(false)}
                    onMouseEnter={() => setIsShowMoreOpen(true)}
                    onMouseLeave={() => setIsShowMoreOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 capitalize"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Ikon Kanan */}
        <div className="flex items-center space-x-4">
          <Link href="/search">
            <AiOutlineSearch className="text-2xl cursor-pointer text-black" />
          </Link>
          <AiOutlineUser className="text-2xl cursor-pointer text-black" />

          {/* Tombol Menu (mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-2">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${category}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="block text-gray-700 hover:text-blue-600 capitalize">
                  {category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
