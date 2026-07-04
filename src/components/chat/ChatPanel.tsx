"use client";

import { useState } from "react";

type Props = {
  onGenerate: (prompt: string) => void;
};

export default function ChatPanel({ onGenerate }: Props) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit() {
    if (!prompt.trim()) return;

    onGenerate(prompt);
    setPrompt("");
  }

  return (
    <div className="flex h-[600px] flex-col rounded-2xl border border-gray-800 bg-[#111827] p-6">
      <h2 className="mb-4 text-xl font-bold">
        💬 ForgeAI Assistant
      </h2>

      <div className="flex-1 rounded-xl bg-[#0B1220] p-4 text-gray-400">
        Describe the website you want to build.
      </div>

      <div className="mt-4 flex gap-3">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Build me a coaching website..."
          className="flex-1 rounded-xl border border-gray-700 bg-[#0B1220] px-4 py-3 outline-none"
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
        >
          Generate
        </button>
      </div>
    </div>
  );
}