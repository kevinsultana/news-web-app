import BreakingNews from "@/components/home/breaking-news";
import Hero from "@/components/home/hero";
import NewsCard from "@/components/news-card";

export default function Home() {
  return (
    <div className="space-y-6">
      <section id="hero">
        <Hero />
      </section>
      <section id="breaking-news">
        <BreakingNews />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    </div>
  );
}
