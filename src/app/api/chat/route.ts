import { NextRequest, NextResponse } from "next/server";

import { generateWebsite } from "@/lib/ai";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    const document = await generateWebsite(prompt);

    return NextResponse.json(document);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Website generation failed.",
      },
      {
        status: 500,
      }
    );
  }
}