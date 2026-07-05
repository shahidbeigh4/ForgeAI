import { normalizePrompt } from "./analyzer";
import { detectBusiness } from "./business";
import { detectTheme } from "./theme";

import {
  WebsiteSchema,
} from "../schema/website";

export function planWebsite(
  prompt: string
): WebsiteSchema {

  const clean = normalizePrompt(prompt);

  const business =
    detectBusiness(clean);

  const theme =
    detectTheme(clean);

  return {
    id: crypto.randomUUID(),

    name: "New Website",

    description: clean,

    business,

    theme,

    sections: [
      {
        id: crypto.randomUUID(),

        type: "hero",

        props: {
          title: "Welcome",

          subtitle: clean,

          buttonText: "Get Started",
        },
      },
    ],
  };
}