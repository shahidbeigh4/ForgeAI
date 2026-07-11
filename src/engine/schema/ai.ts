import {
  BusinessType,
  ThemeType,
} from "./document";

import { HeroProps } from "./website";

export interface AIHeroSection {
  type: "hero";
  props: HeroProps;
}

export interface AIGenericSection {
  type: "features" | "contact" | "footer";
  props: Record<string, unknown>;
}

export type AISection =
  | AIHeroSection
  | AIGenericSection;

export interface AIDocument {
  name: string;

  business: BusinessType;

  theme: ThemeType;

  sections: AISection[];
}