import { BusinessType } from "./business";

export function validateBusiness(
  business: BusinessType
): BusinessType {
  return business ?? "unknown";
}

export function validateTheme(theme: string) {
  return theme || "modern";
}