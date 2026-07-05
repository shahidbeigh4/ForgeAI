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

export type SectionType =
  | "hero"
  | "features"
  | "contact"
  | "footer";

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface BaseSection {
  id: string;
  type: SectionType;
}

export interface HeroSection extends BaseSection {
  type: "hero";
  props: HeroProps;
}

export interface EmptySection extends BaseSection {
  type: "features" | "contact" | "footer";
  props: {};
}

export type WebsiteSection =
  | HeroSection
  | EmptySection;