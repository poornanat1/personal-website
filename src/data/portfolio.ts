export interface Experience {
  date: string;
  company: "Latham & Watkins" | "Palantir Technologies" | "SMX" | "Deloitte";
  title: string;
  description: string;
  current?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    date: "2025 — NOW",
    company: "Latham & Watkins",
    title: "Senior Machine Learning Engineer",
    current: true,
    description:
      "Developing production AI platforms at one of the world's largest law firms.",
  },
  {
    date: "2024 — 2025",
    company: "Palantir Technologies",
    title: "Deployment Strategist",
    description:
      "Built LLM-driven classification and retrieval applications for U.S. government clients, reducing manual classification and data-processing work.",
  },
  {
    date: "2022 — 2024",
    company: "SMX",
    title: "Machine Learning Engineer",
    description:
      "Built distributed data pipelines and extraction systems supporting active-learning models in classified environments.",
  },
  {
    date: "2019 — 2022",
    company: "Deloitte",
    title: "Senior Consultant",
    description:
      "Delivered cloud-native analytics and ML applications for federal clients while leading a 200+ member Spark community of practice.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning & GenAI",
    items: [
      "RAG / retrieval",
      "Vector search",
      "Embeddings",
      "Agentic systems",
      "DSPy / GEPA",
      "Fine-tuning",
      "LLM evaluation",
      "ONNX runtime",
    ],
  },
  {
    title: "Languages & Backend",
    items: ["Python", "C#", "Go", "Java", "TypeScript", "PySpark"],
  },
  {
    title: "Infrastructure & Platforms",
    items: [
      "Kubernetes / OpenShift",
      "Docker",
      "Airflow",
      "Kafka",
      "Postgres / pgvector",
      "Azure / AWS",
    ],
  },
];
