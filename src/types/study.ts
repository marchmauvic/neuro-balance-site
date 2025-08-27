export type Endpoint = { type: string; name: string };
export type AssetLink = { label: string; url: string };

export type Study = {
  slug: string;
  title: string;
  year: number;
  venue?: string;
  indication?: string;
  design: string;
  population: string;
  endpoints: Endpoint[];
  keyFindings: string[];
  assets?: AssetLink[];
};

