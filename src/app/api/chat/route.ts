import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: "Say hello from ForgeAI.",
    });

    return NextResponse.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}