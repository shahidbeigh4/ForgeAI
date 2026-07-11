import {
  HeroProps,
  AboutProps,
  FeaturesProps,
  TestimonialsProps,
  PricingProps,
  FAQProps,
  ContactProps,
  FooterProps,
} from "./website";

import {
  BusinessType,
  ThemeType,
} from "./document";

/* -------------------------------------------------------------------------- */
/*                               HERO SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface AIHeroSection {
  type: "hero";
  props: HeroProps;
}

/* -------------------------------------------------------------------------- */
/*                              ABOUT SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface AIAboutSection {
  type: "about";
  props: AboutProps;
}

/* -------------------------------------------------------------------------- */
/*                            FEATURES SECTION                                */
/* -------------------------------------------------------------------------- */

export interface AIFeaturesSection {
  type: "features";
  props: FeaturesProps;
}

/* -------------------------------------------------------------------------- */
/*                         TESTIMONIALS SECTION                               */
/* -------------------------------------------------------------------------- */

export interface AITestimonialsSection {
  type: "testimonials";
  props: TestimonialsProps;
}

/* -------------------------------------------------------------------------- */
/*                            PRICING SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface AIPricingSection {
  type: "pricing";
  props: PricingProps;
}

/* -------------------------------------------------------------------------- */
/*                               FAQ SECTION                                  */
/* -------------------------------------------------------------------------- */

export interface AIFAQSection {
  type: "faq";
  props: FAQProps;
}

/* -------------------------------------------------------------------------- */
/*                             CONTACT SECTION                                */
/* -------------------------------------------------------------------------- */

export interface AIContactSection {
  type: "contact";
  props: ContactProps;
}

/* -------------------------------------------------------------------------- */
/*                              FOOTER SECTION                                */
/* -------------------------------------------------------------------------- */

export interface AIFooterSection {
  type: "footer";
  props: FooterProps;
}

/* -------------------------------------------------------------------------- */
/*                               AI SECTION                                   */
/* -------------------------------------------------------------------------- */

export type AISection =
  | AIHeroSection
  | AIAboutSection
  | AIFeaturesSection
  | AITestimonialsSection
  | AIPricingSection
  | AIFAQSection
  | AIContactSection
  | AIFooterSection;

/* -------------------------------------------------------------------------- */
/*                              AI DOCUMENT                                   */
/* -------------------------------------------------------------------------- */

export interface AIDocument {
  name: string;
  business: BusinessType;
  theme: ThemeType;
  sections: AISection[];
}