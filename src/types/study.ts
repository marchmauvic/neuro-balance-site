export type EndpointType = "Primary" | "Secondary";

export type Study = {
  slug: string;
  title: string;
  year: number;
  venue?: string;
  doi?: string;
  authors?: string[];
  institutions?: string[];
  design: "RCT" | "Cohort" | "Preclinical" | "Case series" | "Other";
  indication: string;
  population: string;
  n: number;
  endpoints: { name: string; type: EndpointType }[];
  results: string;
  keyFindings: string[];
  assets?: { label: string; url: string }[];
  tags?: string[];
};

