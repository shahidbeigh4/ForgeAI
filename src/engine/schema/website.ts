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

export interface FeaturesSection extends BaseSection {
  type: "features";
  props: {};
}

export interface ContactSection extends BaseSection {
  type: "contact";
  props: {};
}

export interface FooterSection extends BaseSection {
  type: "footer";
  props: {};
}

export type WebsiteSection =
  | HeroSection
  | FeaturesSection
  | ContactSection
  | FooterSection;

export interface WebsiteSchema {
  id: string;
  name: string;
  description: string;
  business: string;
  theme: ThemeType;
  sections: WebsiteSection[];
}