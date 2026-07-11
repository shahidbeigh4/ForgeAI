import { AIDocument } from "@/engine/schema/ai";
import { ForgeDocument } from "@/engine/schema/document";
import { WebsiteSection } from "@/engine/schema/website";

export function mapAiDocument(
  ai: AIDocument
): ForgeDocument {

  const sections: WebsiteSection[] = [];

  for (const section of ai.sections) {

    switch (section.type) {

      case "hero":
        sections.push({
          id: crypto.randomUUID(),
          type: "hero",
          props: section.props,
        });
        break;

      case "about":
        sections.push({
          id: crypto.randomUUID(),
          type: "about",
          props: section.props,
        });
        break;

      case "features":
        sections.push({
          id: crypto.randomUUID(),
          type: "features",
          props: section.props,
        });
        break;

      case "testimonials":
        sections.push({
          id: crypto.randomUUID(),
          type: "testimonials",
          props: section.props,
        });
        break;

      case "pricing":
        sections.push({
          id: crypto.randomUUID(),
          type: "pricing",
          props: section.props,
        });
        break;

      case "faq":
        sections.push({
          id: crypto.randomUUID(),
          type: "faq",
          props: section.props,
        });
        break;

      case "contact":
        sections.push({
          id: crypto.randomUUID(),
          type: "contact",
          props: section.props,
        });
        break;

      case "footer":
        sections.push({
          id: crypto.randomUUID(),
          type: "footer",
          props: section.props,
        });
        break;

      default: {
        const exhaustive: never = section;
        throw new Error(
          `Unknown section type: ${JSON.stringify(exhaustive)}`
        );
      }
    }
  }

  return {
    id: crypto.randomUUID(),
    name: ai.name,
    business: ai.business,
    theme: ai.theme,
    sections,
  };
}