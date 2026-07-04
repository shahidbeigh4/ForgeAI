import { BusinessType } from "./business";

export function getSections(
  business: BusinessType
) {
  switch (business) {
    case "education":
      return [
        "hero",
        "features",
        "testimonials",
        "gallery",
        "contact",
        "footer",
      ];

    case "restaurant":
      return [
        "hero",
        "gallery",
        "contact",
        "footer",
      ];

    case "hotel":
      return [
        "hero",
        "gallery",
        "testimonials",
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