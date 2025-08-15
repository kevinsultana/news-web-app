"use server";
export default async function SearchFunction(searchQuery: string) {
  const apiKey = process.env.NYT_API_KEY;
  if (!apiKey) {
    throw new Error("API key not found");
  }
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
