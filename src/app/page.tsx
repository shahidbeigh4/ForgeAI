"use client";

import WebsiteRenderer from "@/engine/renderer/WebsiteRenderer";
import { planWebsite } from "@/engine/planner";

export default function Home() {
  const document = planWebsite(
    "Build me a modern coaching website"
  );

  return (
    <main className="min-h-screen bg-[#0B0F19] p-10">
      <WebsiteRenderer
        document={document}
      />
    </main>
  );
}