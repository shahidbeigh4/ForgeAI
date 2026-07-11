import { AIDocument } from "@/engine/schema/ai";
import {
  ForgeDocument,
} from "@/engine/schema/document";

import {
  WebsiteSection,
} from "@/engine/schema/website";

export function mapAiDocument(
  ai: AIDocument
): ForgeDocument {

  const sections: WebsiteSection[] = ai.sections.map((section) => {

    if (section.type === "hero") {
      return {
        id: crypto.randomUUID(),
        type: "hero",
        props: {
          title: section.props.title,
          subtitle: section.props.subtitle,
          buttonText: section.props.buttonText,
        },
      };
    }

    return {
      id: crypto.randomUUID(),
      type: section.type,
      props: section.props,
    };
  });

  return {
    id: crypto.randomUUID(),
    name: ai.name,
    business: ai.business,
    theme: ai.theme,
    sections,
  };
}