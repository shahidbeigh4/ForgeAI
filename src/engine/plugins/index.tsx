import { HeroPlugin } from "./Hero";
import FeaturesPlugin from "./Features";
import ContactPlugin from "./Contact";
import FooterPlugin from "./Footer";

export const pluginRegistry = {
  hero: HeroPlugin,
  features: FeaturesPlugin,
  contact: ContactPlugin,
  footer: FooterPlugin,
} as const;