import {
  HeroProps,
  FeaturesProps,
  ContactProps,
  FooterProps,
} from "./website";

import {
  BusinessType,
  ThemeType,
} from "./document";

export interface AIHeroSection {
  type: "hero";
  props: HeroProps;
}

export interface AIFeaturesSection {
  type: "features";
  props: FeaturesProps;
}

export interface AIContactSection {
  type: "contact";
  props: ContactProps;
}

export interface AIFooterSection {
  type: "footer";
  props: FooterProps;
}

export type AISection =
  | AIHeroSection
  | AIFeaturesSection
  | AIContactSection
  | AIFooterSection;

export interface AIDocument {
  name: string;
  business: BusinessType;
  theme: ThemeType;
  sections: AISection[];
}