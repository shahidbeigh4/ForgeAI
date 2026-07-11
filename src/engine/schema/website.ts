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

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesProps {
  heading: string;
  items: FeatureItem[];
}

export interface ContactProps {
  heading: string;
  subtitle: string;
  buttonText: string;
}

export interface FooterProps {
  copyright: string;
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
  props: FeaturesProps;
}

export interface ContactSection extends BaseSection {
  type: "contact";
  props: ContactProps;
}

export interface FooterSection extends BaseSection {
  type: "footer";
  props: FooterProps;
}

export type WebsiteSection =
  | HeroSection
  | FeaturesSection
  | ContactSection
  | FooterSection;