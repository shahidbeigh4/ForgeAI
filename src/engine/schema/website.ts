export type ThemeType =
  | "modern"
  | "minimal"
  | "luxury"
  | "dark";

export type SectionType =
  | "hero"
  | "about"
  | "features"
  | "gallery"
  | "pricing"
  | "testimonials"
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

export type WebsiteSection =
  | HeroSection;

export interface WebsiteSchema {
  id: string;

  name: string;

  description: string;

  business: string;

  theme: ThemeType;

  sections: WebsiteSection[];
}