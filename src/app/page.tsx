import BreakingNews from "@/components/home/breaking-news";
import Hero from "@/components/home/hero";
import NewsCard from "@/components/news-card";

export default async function Home() {
  const fetchNews = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=22&api-key=${process.env.NYT_API_KEY}`
    );
    const data = await res.json();
    return data.results as News[];
  };

  const news = await fetchNews();

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
