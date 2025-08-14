"use client";
import NewsCard from "@/components/news-card";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8 my-6">
      <section id="search-bar">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
          Cari Berita
        </h1>
        <p className="text-gray-600 mb-6">
          Temukan berita terbaru dari seluruh dunia.
        </p>
        <form className="flex items-center w-full max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ketik kata kunci pencarian..."
            className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
          >
            <AiOutlineSearch className="h-6 w-6" />
          </button>
        </form>
      </section>

      <section id="search-results">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section>
    </div>
  );
}
