"use client";

import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import Preview from "./Preview";

import ChatHistory, {
  Message,
} from "../chat/ChatHistory";

import ChatComposer from "../chat/ChatComposer";

import { ForgeDocument } from "@/engine/schema/document";


export default function ForgeAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [document, setDocument] =
    useState<ForgeDocument | null>(null);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const prompt = input;

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: prompt,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    prompt,
  }),
});

if (!response.ok) {
  throw new Error("Generation failed.");
}

const website = await response.json();

setDocument(website);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: "Website generated successfully.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't generate the website.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen bg-[#020617] text-white">
      <Sidebar>
        <Header />

        <ChatHistory messages={messages} />

        <ChatComposer
          value={input}
          onChange={setInput}
          onSend={sendMessage}
          loading={loading}
        />
      </Sidebar>

      <Workspace>
        <Preview document={document} />
      </Workspace>
    </div>
  );
}