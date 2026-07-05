export type BusinessType =
  | "education"
  | "restaurant"
  | "hotel"
  | "portfolio"
  | "hospital"
  | "ecommerce"
  | "agency"
  | "unknown";

export function detectBusiness(prompt: string): BusinessType {
  const text = prompt.toLowerCase();

  if (
    text.includes("school") ||
    text.includes("coaching") ||
    text.includes("college") ||
    text.includes("education")
  ) {
    return "education";
  }

  if (
    text.includes("restaurant") ||
    text.includes("cafe")
  ) {
    return "restaurant";
  }

  if (
    text.includes("hotel") ||
    text.includes("resort")
  ) {
    return "hotel";
  }

  if (
    text.includes("portfolio")
  ) {
    return "portfolio";
  }

  if (
    text.includes("hospital") ||
    text.includes("clinic")
  ) {
    return "hospital";
  }

  if (
    text.includes("shop") ||
    text.includes("store") ||
    text.includes("ecommerce")
  ) {
    return "ecommerce";
  }

  if (
    text.includes("agency")
  ) {
    return "agency";
  }

  return "portfolio";
}