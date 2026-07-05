import { SectionType, WebsiteSection } from "../schema/website";

export function createSection(
  type: SectionType
): WebsiteSection {
  switch (type) {
    case "hero":
      return {
        id: crypto.randomUUID(),
        type: "hero",
        props: {
          title: "Foundation Blocks",
          subtitle: "AI Generated Website",
          buttonText: "Get Started",
        },
      };

    case "features":
      return {
        id: crypto.randomUUID(),
        type: "features",
        props: {},
      };

    case "contact":
      return {
        id: crypto.randomUUID(),
        type: "contact",
        props: {},
      };

    case "footer":
      return {
        id: crypto.randomUUID(),
        type: "footer",
        props: {},
      };
  }
}