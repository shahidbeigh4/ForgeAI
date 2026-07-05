import { BusinessType } from "./business";
import { SectionType } from "../schema/website";

export function getSections(
  business: BusinessType
): SectionType[] {
  switch (business) {
    case "education":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "hotel":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "restaurant":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "portfolio":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "startup":
    default:
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];
  }
}