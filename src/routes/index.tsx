import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asma Guenaien — Junior Software Developer" },
      { name: "description", content: "Portfolio of Asma Guenaien, junior software developer based in Tunis, Tunisia. Explore selected web development projects, React, TypeScript, and a security-first mindset. Open to junior roles and freelance projects." },
      { property: "og:title", content: "Asma Guenaien — Junior Software Developer" },
      { property: "og:description", content: "Selected software projects, web development, and a security-first mindset. The portfolio of Asma Guenaien." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
