import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRedditAlien, FaRss, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between  md:items-start">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Image
            src="/ks-news-logoo.png"
            alt="KS News Logo"
            width={100}
            height={100}
            className="w-20 h-20  object-cover object-center rounded-full"
          />
          <p className="mt-4 text-sm">copyright &copy; 2025 | KS News</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-6 md:mb-0">
          <div className="flex flex-col space-y-2">
            <Link href={"#"} className="hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link href={"#"} className="hover:text-blue-500">
              Do not sell my personal info
            </Link>
            <Link href={"#"} className="hover:text-blue-500">
              Terms of Service
            </Link>
            <Link href={"#"} className="hover:text-blue-500">
              ksnews.com Site Map
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href={"#"} className="hover:text-blue-500">
              About
            </Link>
            <Link href={"#"} className="hover:text-blue-500">
              Contact
            </Link>
            <Link href={"#"} className="hover:text-blue-500">
              Careers
            </Link>
            <Link href={"#"} className="hover:text-blue-500">
              Coupons
            </Link>
          </div>
        </div>

        <div className="flex space-x-6 justify-center ">
          <Link href={"#"}>
            <FaRss size={24} className="hover:text-blue-500" />
          </Link>
          <Link href={"#"}>
            <FaTwitter size={24} className="hover:text-blue-500" />
          </Link>
          <Link href={"#"}>
            <FaYoutube size={24} className="hover:text-blue-500" />
          </Link>
          <Link href={"#"}>
            <FaRedditAlien size={24} className="hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
