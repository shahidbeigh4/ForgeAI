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
  "contact",
  "footer",
];

    case "hotel":
      return [
  "hero",
  "contact",
  "footer",
];

    default:
      return [
        "hero",
        "contact",
        "footer",
      ];
      
  }
}