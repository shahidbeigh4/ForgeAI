"use client";

import { useState } from "react";

import Hero from "@/components/landing/Hero";
import ChatPanel from "@/components/chat/ChatPanel";
import PreviewPanel from "@/components/landing/PreviewPanel";
import BlueprintCard from "@/components/landing/BlueprintCard";

import { generateWebsiteBlueprint } from "@/lib/ai/mock";
import { WebsiteBlueprint } from "@/types/website";
import WebsiteRenderer from "@/components/generated/WebsiteRenderer";

export default function Home() {
  const [blueprint, setBlueprint] =
    useState<WebsiteBlueprint | null>(null);

  async function handleGenerate(prompt: string) {
    const result = await generateWebsiteBlueprint(prompt);
    setBlueprint(result);
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">

      <Hero />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 lg:grid-cols-2">

        <ChatPanel onGenerate={handleGenerate} />

        {blueprint ? (
          <WebsiteRenderer blueprint={blueprint} />
        ) : (
          <PreviewPanel />
        )}

      </section>

    </main>
  );
}