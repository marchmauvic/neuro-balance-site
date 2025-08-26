import news from "@/data/news.json";
import NewsCard from "@/components/NewsCard";

export default function NewsIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Newsroom</h1>
      <div className="grid gap-4">
        {(news as any[]).map((n, i) => (
          <NewsCard key={i} item={n} />
        ))}
      </div>
    </div>
  );
}

