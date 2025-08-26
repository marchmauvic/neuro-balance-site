// src/types/study.ts
export type Endpoint = { type: string; name: string };
export type AssetLink = { label: string; url: string };

export type Study = {
  slug: string;
  title: string;
  year: number;
  venue?: string;          // optional
  design: string;
  population: string;
  indication?: string;     // optional
  endpoints: Endpoint[];   // array of { type, name }
  keyFindings: string[];   // array of strings
  assets?: AssetLink[];    // optional links to PDFs, posters, etc.
};

