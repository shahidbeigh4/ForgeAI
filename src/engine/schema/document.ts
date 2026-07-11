import { WebsiteSection } from "./website";

export type BusinessType =
  | "education"
  | "hotel"
  | "restaurant"
  | "portfolio"
  | "startup";

export type ThemeType =
  | "modern"
  | "minimal"
  | "luxury"
  | "dark";

export interface ForgeDocument {
  id: string;

  name: string;

  business: BusinessType;

  theme: ThemeType;

  sections: WebsiteSection[];
}