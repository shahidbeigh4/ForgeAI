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

export interface GenericSection extends BaseSection {
  type: "features" | "contact" | "footer";
  props: Record<string, unknown>;
}

export type WebsiteSection =
  | HeroSection
  | GenericSection;