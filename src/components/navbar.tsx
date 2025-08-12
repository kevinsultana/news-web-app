"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white p-4 shadow-md flex items-center justify-between">
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
        <Link href="/corona-updates">
          <p className="text-gray-700 hover:text-blue-600">Corona Updates</p>
        </Link>
        <Link href="/politics">
          <p className="text-gray-700 hover:text-blue-600">Politics</p>
        </Link>
        <Link href="/business">
          <p className="text-gray-700 hover:text-blue-600">Business</p>
        </Link>
        <Link href="/sports">
          <p className="text-gray-700 hover:text-blue-600">Sports</p>
        </Link>
        <Link href="/world">
          <p className="text-gray-700 hover:text-blue-600">World</p>
        </Link>
        <Link href="/travel">
          <p className="text-gray-700 hover:text-blue-600">Travel</p>
        </Link>
        <Link href="/podcasts">
          <p className="text-gray-700 hover:text-blue-600">Podcasts</p>
        </Link>
      </div>

      {/* Ikon Kanan */}
      <div className="flex items-center space-x-4">
        <AiOutlineSearch className="text-2xl cursor-pointer text-black" />
        <AiOutlineUser className="text-2xl cursor-pointer text-black" />

        {/* Tombol Menu (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-2">
            <Link href="/corona-updates">
              <p className="block text-gray-700 hover:text-blue-600">
                Corona Updates
              </p>
            </Link>
            <Link href="/politics">
              <p className="block text-gray-700 hover:text-blue-600">
                Politics
              </p>
            </Link>
            <Link href="/business">
              <p className="block text-gray-700 hover:text-blue-600">
                Business
              </p>
            </Link>
            <Link href="/sports">
              <p className="block text-gray-700 hover:text-blue-600">Sports</p>
            </Link>
            <Link href="/world">
              <p className="block text-gray-700 hover:text-blue-600">World</p>
            </Link>
            <Link href="/travel">
              <p className="block text-gray-700 hover:text-blue-600">Travel</p>
            </Link>
            <Link href="/podcasts">
              <p className="block text-gray-700 hover:text-blue-600">
                Podcasts
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
