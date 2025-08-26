// src/types/news.ts
export type NewsItem = {
  slug: string;
  title: string;
  date: string;     // ISO: YYYY-MM-DD
  summary: string;
  source?: string;  // optional
  url: string;      // external link
};

