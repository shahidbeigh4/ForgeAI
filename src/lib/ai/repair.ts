import { AIDocument } from "@/engine/schema/ai";

export function repairDocument(
  document: AIDocument
): AIDocument {

  // Normalize business
  const business = document.business.toLowerCase();

  switch (business) {
    case "coaching":
    case "school":
    case "college":
    case "education":
      document.business = "education";
      break;

    case "hotel":
    case "resort":
      document.business = "hotel";
      break;

    case "restaurant":
    case "cafe":
      document.business = "restaurant";
      break;

    case "portfolio":
      document.business = "portfolio";
      break;

    default:
      document.business = "startup";
  }

  // Normalize theme
  const theme = document.theme.toLowerCase();

  switch (theme) {
    case "modern":
    case "modern coaching":
    case "modern education":
      document.theme = "modern";
      break;

    case "minimal":
      document.theme = "minimal";
      break;

    case "luxury":
      document.theme = "luxury";
      break;

    case "dark":
      document.theme = "dark";
      break;

    default:
      document.theme = "modern";
  }

  return document;
}