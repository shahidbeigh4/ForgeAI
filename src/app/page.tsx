"use client";

import { useState } from "react";

import PromptInput from "@/components/chat/PromptInput";
import GenerationStatus from "@/components/chat/GenerationStatus";
import PreviewPanel from "@/components/preview/PreviewPanel";

import { planWebsite } from "@/engine/planner";

export default function Home() {
  const [prompt, setPrompt] = useState(
    "Build me a modern coaching website"
  );

  const [document, setDocument] = useState(
    planWebsite(prompt)
  );

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("");

  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function generate() {
    setLoading(true);

    setStep("🧠 Understanding your prompt...");
    await wait(600);

    setStep("🏢 Detecting business type...");
    await wait(600);

    setStep("🎨 Choosing design theme...");
    await wait(600);

    setStep("📐 Building website sections...");
    await wait(600);

    setStep("🚀 Rendering preview...");
    await wait(700);

    setDocument(planWebsite(prompt));

    setLoading(false);
    setStep("");
  }

  return (
    <main className="h-screen overflow-hidden">
      <div className="grid h-full grid-cols-[420px_1fr]">

        <aside className="border-r border-white/10 bg-black/30 p-8 backdrop-blur-xl">

          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onGenerate={generate}
            loading={loading}
          />

          {loading && (
            <GenerationStatus step={step} />
          )}

        </aside>

        <section className="overflow-auto p-8">
          <PreviewPanel document={document} />
        </section>

      </div>
    </main>
  );
}