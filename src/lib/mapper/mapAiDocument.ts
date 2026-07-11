import { AIDocument } from "@/engine/schema/ai";
import { ForgeDocument } from "@/engine/schema/document";
import { WebsiteSection } from "@/engine/schema/website";

export function mapAiDocument(
  ai: AIDocument
): ForgeDocument {

  const sections: WebsiteSection[] = ai.sections.map((section) => {
    switch (section.type) {
      case "hero":
        return {
          id: crypto.randomUUID(),
          type: "hero",
          props: section.props,
        };

      case "features":
        return {
          id: crypto.randomUUID(),
          type: "features",
          props: section.props,
        };

      case "contact":
        return {
          id: crypto.randomUUID(),
          type: "contact",
          props: section.props,
        };

      case "footer":
        return {
          id: crypto.randomUUID(),
          type: "footer",
          props: section.props,
        };
    }
  });

  return {
    id: crypto.randomUUID(),
    name: ai.name,
    business: ai.business,
    theme: ai.theme,
    sections,
  };
}