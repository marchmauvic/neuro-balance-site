export type NewsItem = {
  date: string;   // ISO date like "2022-02-01"
  title: string;
  summary: string;
  url: string;    // external link to source
  slug: string;   // used for internal keys/links
};

