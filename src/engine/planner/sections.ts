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

    case "restaurant":
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

    case "portfolio":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "hospital":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "ecommerce":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "agency":
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];

    case "unknown":
    default:
      return [
        "hero",
        "features",
        "contact",
        "footer",
      ];
  }
}