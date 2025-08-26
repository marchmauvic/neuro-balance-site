export type Asset = { label: string; url: string };
export type Endpoint = { type: string; name: string };

export type Study = {
  slug: string;
  title: string;
  year?: number | string;
  venue?: string | null;
  design?: string;
  population?: string;
  indication?: string;
  keyFindings?: string[];
  endpoints?: Endpoint[];
  assets?: Asset[];
};

