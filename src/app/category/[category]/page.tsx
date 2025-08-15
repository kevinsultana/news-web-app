import BreakingNews from "@/components/home/breaking-news";
import Hero from "@/components/home/hero";
import NewsCard from "@/components/news-card";
import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;

  const fetchData = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.NYT_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results as News[];
  };

  const news = await fetchData();

  return (
    <div className="space-y-6">
      <section id="hero">
        <Hero data={news} />
      </section>
      <section id="breaking-news">
        <BreakingNews data={news} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.slice(2).map((item, index) => (
          <NewsCard key={index} data={item} />
        ))}
      </section>
    </div>
  );
}
