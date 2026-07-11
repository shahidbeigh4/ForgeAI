import { NextResponse } from "next/server";
import { generateWebsite } from "@/lib/ai";

export async function GET() {
  const document = await generateWebsite(
    "Create a modern coaching website called Foundation Blocks."
  );

  return NextResponse.json(document);
}