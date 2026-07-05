import { analyzePrompt } from "./analyzer";
import { detectBusiness } from "./business";
import { detectTheme } from "./theme";
import { getSections } from "./sections";
import { createSection } from "./factory";

import { ForgeDocument } from "../schema/document";
import { getTemplate } from "../templates";

export function planWebsite(
  prompt: string
): ForgeDocument {
  const analysis = analyzePrompt(prompt);

  const business = detectBusiness(analysis);

  const theme = detectTheme(analysis);

  const template = getTemplate(business);

  const sections = getSections(business).map(createSection);

  const hero = sections.find(
    (section) => section.type === "hero"
  );

  if (hero && hero.type === "hero") {
    hero.props = {
      title: template.hero.title,
      subtitle: template.hero.subtitle,
      buttonText: template.hero.buttonText,
    };
  }

  return {
    id: crypto.randomUUID(),

    name: template.name,

    business,

    theme,

    sections,
  };
}