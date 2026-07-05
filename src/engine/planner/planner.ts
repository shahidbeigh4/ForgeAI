import { normalizePrompt } from "./analyzer";
import { detectBusiness } from "./business";
import { detectTheme } from "./theme";

import { ForgeDocument } from "../schema/document";

export function planWebsite(
  prompt: string
): ForgeDocument {

  const clean = normalizePrompt(prompt);

  // We will use these in Sprint 3.2
  detectBusiness(clean);
  detectTheme(clean);

  return {
    id: crypto.randomUUID(),

    name: "Foundation Blocks",

    sections: [
      {
        id: crypto.randomUUID(),

        type: "hero",

        props: {
          title: "Foundation Blocks",

          subtitle: clean,

          buttonText: "Enroll Now",
        },
      },
    ],
  };
}