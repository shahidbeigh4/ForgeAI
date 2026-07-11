import { gemini } from "./gemini";
import { SYSTEM_PROMPT } from "./prompts";
import { extractJson } from "./extractJson";
import { repairDocument } from "./repair";

import { AIDocument } from "@/engine/schema/ai";
import { AIDocumentSchema } from "@/lib/validators/forgeDocument";
import { mapAiDocument } from "@/lib/mapper/mapAiDocument";

export async function generateWebsite(
  prompt: string
) {
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",

      contents: `
${SYSTEM_PROMPT}

User Request:

${prompt}
`,
    });

    const raw = response.text ?? "";

    if (process.env.NODE_ENV === "development") {
      console.log("Gemini Response:\n", raw);
    }

    // Extract JSON from Gemini response
    const json = extractJson(raw);

    // Parse JSON
    const parsed = JSON.parse(json) as AIDocument;

    // Repair invalid values
    const repaired = repairDocument(parsed);

    // Validate AI document
    const validated = AIDocumentSchema.parse(repaired);

    // Convert AI document to runtime ForgeDocument
    return mapAiDocument(validated);

  } catch (error) {
    console.error("Gemini Error:", error);

    throw new Error(
      "ForgeAI couldn't generate a valid website."
    );
  }
}