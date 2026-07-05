import { HeroPlugin } from "./HeroPlugin";
import { FeaturesPlugin } from "./FeaturesPlugin";
import { ContactPlugin } from "./ContactPlugin";
import { FooterPlugin } from "./FooterPlugin";

export const pluginRegistry = {
  hero: HeroPlugin,
  features: FeaturesPlugin,
  contact: ContactPlugin,
 footer: FooterPlugin,
} as const;