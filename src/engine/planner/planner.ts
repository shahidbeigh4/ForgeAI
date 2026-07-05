import { normalizePrompt } from "./analyzer";
import { detectBusiness } from "./business";
import { detectTheme } from "./theme";
import { getSections } from "./sections";
import { createSection } from "./factory";

import { ForgeDocument } from "../schema/document";
import { getTemplate } from "../templates";

export function planWebsite(
  prompt: string
): ForgeDocument {

  const clean = normalizePrompt(prompt);

  const business = detectBusiness(clean);

  detectTheme(clean);

 const templateBusiness =
  business === "education" ||
  business === "hotel" ||
  business === "restaurant" ||
  business === "portfolio"
    ? business
    : "startup";

const template = getTemplate(templateBusiness);

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
  business: templateBusiness,
  theme: "modern",
  sections,
};
}