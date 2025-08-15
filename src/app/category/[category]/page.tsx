import BreakingNews from "@/components/home/breaking-news";
import Hero from "@/components/home/hero";
import NewsCard from "@/components/news-card";
import React from "react";
import { Metadata } from "next";

type Params = {
  category: string;
};

const fetchData = async (category: string) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.NYT_API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 600 } });
  const data = await res.json();
  return data.results as News[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const news = await fetchData(category);

  if (!news || news.length === 0) {
    return {
      title: `News Category: ${category}`,
      description: `No news found for ${category} category.`,
    };
  }

  const firstNews = news[0];

  return {
    title: `KS News - ${
      firstNews.section.charAt(0).toUpperCase() + firstNews.section.slice(1)
    }`,
    description: firstNews.abstract,
    keywords: [firstNews.section, "news", "breaking news", "terbaru"],
    authors: [{ name: firstNews.byline }],
    openGraph: {
      title: `KS News - ${
        firstNews.section.charAt(0).toUpperCase() + firstNews.section.slice(1)
      }`,
      description: firstNews.abstract,
      images: firstNews.multimedia
        ? [{ url: firstNews.multimedia[0].url, alt: firstNews.title }]
        : undefined,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const news = await fetchData(category);

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
