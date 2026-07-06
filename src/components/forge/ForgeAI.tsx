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
import { planWebsite } from "@/engine/planner";

export default function ForgeAI() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [document, setDocument] =
    useState<ForgeDocument | null>(null);

  function sendMessage() {
    if (!input.trim()) return;

    const prompt = input;

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: prompt,
      },
    ]);

    setLoading(true);

    const website = planWebsite(prompt);

    setDocument(website);

    setMessages((previous) => [
      ...previous,
      {
        role: "assistant",
        content:
          "Website generated successfully.",
      },
    ]);

    setInput("");

    setLoading(false);
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