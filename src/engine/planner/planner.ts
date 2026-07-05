import { normalizePrompt } from "./analyzer";
import { detectBusiness } from "./business";
import { detectTheme } from "./theme";
import { getSections } from "./sections";
import { createSection } from "./factory";

import { ForgeDocument } from "../schema/document";

export function planWebsite(
  prompt: string
): ForgeDocument {
  const clean = normalizePrompt(prompt);

  const business = detectBusiness(clean);
  detectTheme(clean);

  const sections = getSections(business);

  return {
    id: crypto.randomUUID(),
    name: "Foundation Blocks",
    sections: sections.map(createSection),
  };
}