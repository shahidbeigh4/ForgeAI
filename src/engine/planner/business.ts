import { PromptAnalysis } from "./analyzer";

export type BusinessType =
  | "education"
  | "hotel"
  | "restaurant"
  | "portfolio"
  | "startup";

export function detectBusiness(
  analysis: PromptAnalysis
): BusinessType {

  const text = analysis.normalized;

  if (
    text.includes("school") ||
    text.includes("coaching") ||
    text.includes("education")
  ) {
    return "education";
  }

  if (
    text.includes("hotel") ||
    text.includes("resort")
  ) {
    return "hotel";
  }

  if (
    text.includes("restaurant") ||
    text.includes("cafe")
  ) {
    return "restaurant";
  }

  if (
    text.includes("portfolio")
  ) {
    return "portfolio";
  }

  return "startup";
}