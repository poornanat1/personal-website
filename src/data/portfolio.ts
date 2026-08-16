export interface Experience {
  date: string;
  company: "Latham & Watkins" | "Palantir Technologies" | "SMX" | "Deloitte";
  title: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    date: "2025 — NOW",
    company: "Latham & Watkins",
    title: "Senior Machine Learning Engineer",
    current: true,
    description:
      "Building production agentic document-intelligence and enterprise search systems using grounded generation, hybrid retrieval, contextual ranking, tiered model routing, and automated LLM evaluation.",
  },
  {
    date: "2024 — 2025",
    company: "Palantir Technologies",
    title: "Deployment Strategist",
    description:
      "Architected and launched LLM-driven classification, vector-retrieval, and real-time data applications for U.S. government users, turning long-running manual workflows into reliable production systems.",
  },
  {
    date: "2022 — 2024",
    company: "SMX",
    title: "Machine Learning Engineer",
    description:
      "Developed scalable LLM extraction and translation services, plus distributed ingestion, validation, and monitoring pipelines supporting model training in secure environments.",
  },
  {
    date: "2019 — 2022",
    company: "Deloitte",
    title: "Senior Consultant",
    description:
      "Built cloud data products supporting federal public-health operations and co-led a 200+ member Spark engineering community focused on scalable analytics and machine learning.",
  },
];
