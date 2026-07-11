export type SectionType =
  | "hero"
  | "about"
  | "features"
  | "testimonials"
  | "pricing"
  | "faq"
  | "contact"
  | "footer";

/* -------------------------------------------------------------------------- */
/*                                  HERO                                      */
/* -------------------------------------------------------------------------- */

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

/* -------------------------------------------------------------------------- */
/*                                  ABOUT                                     */
/* -------------------------------------------------------------------------- */

export interface AboutProps {
  heading: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/*                                FEATURES                                    */
/* -------------------------------------------------------------------------- */

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesProps {
  heading: string;
  items: FeatureItem[];
}

/* -------------------------------------------------------------------------- */
/*                             TESTIMONIALS                                   */
/* -------------------------------------------------------------------------- */

export interface TestimonialItem {
  name: string;
  role: string;
  review: string;
}

export interface TestimonialsProps {
  heading: string;
  testimonials: TestimonialItem[];
}

/* -------------------------------------------------------------------------- */
/*                                 PRICING                                    */
/* -------------------------------------------------------------------------- */

export interface PricingItem {
  title: string;
  price: string;
  features: string[];
}

export interface PricingProps {
  heading: string;
  plans: PricingItem[];
}

/* -------------------------------------------------------------------------- */
/*                                   FAQ                                      */
/* -------------------------------------------------------------------------- */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  heading: string;
  items: FAQItem[];
}

/* -------------------------------------------------------------------------- */
/*                                 CONTACT                                    */
/* -------------------------------------------------------------------------- */

export interface ContactProps {
  heading: string;
  subtitle: string;
  buttonText: string;
}

/* -------------------------------------------------------------------------- */
/*                                  FOOTER                                    */
/* -------------------------------------------------------------------------- */

export interface FooterProps {
  copyright: string;
}

/* -------------------------------------------------------------------------- */
/*                               BASE SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface BaseSection {
  id: string;
  type: SectionType;
}

/* -------------------------------------------------------------------------- */
/*                               HERO SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface HeroSection extends BaseSection {
  type: "hero";
  props: HeroProps;
}

/* -------------------------------------------------------------------------- */
/*                              ABOUT SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface AboutSection extends BaseSection {
  type: "about";
  props: AboutProps;
}

/* -------------------------------------------------------------------------- */
/*                            FEATURES SECTION                                */
/* -------------------------------------------------------------------------- */

export interface FeaturesSection extends BaseSection {
  type: "features";
  props: FeaturesProps;
}

/* -------------------------------------------------------------------------- */
/*                         TESTIMONIALS SECTION                               */
/* -------------------------------------------------------------------------- */

export interface TestimonialsSection extends BaseSection {
  type: "testimonials";
  props: TestimonialsProps;
}

/* -------------------------------------------------------------------------- */
/*                            PRICING SECTION                                 */
/* -------------------------------------------------------------------------- */

export interface PricingSection extends BaseSection {
  type: "pricing";
  props: PricingProps;
}

/* -------------------------------------------------------------------------- */
/*                               FAQ SECTION                                  */
/* -------------------------------------------------------------------------- */

export interface FAQSection extends BaseSection {
  type: "faq";
  props: FAQProps;
}

/* -------------------------------------------------------------------------- */
/*                             CONTACT SECTION                                */
/* -------------------------------------------------------------------------- */

export interface ContactSection extends BaseSection {
  type: "contact";
  props: ContactProps;
}

/* -------------------------------------------------------------------------- */
/*                              FOOTER SECTION                                */
/* -------------------------------------------------------------------------- */

export interface FooterSection extends BaseSection {
  type: "footer";
  props: FooterProps;
}

/* -------------------------------------------------------------------------- */
/*                             WEBSITE SECTION                                */
/* -------------------------------------------------------------------------- */

export type WebsiteSection =
  | HeroSection
  | AboutSection
  | FeaturesSection
  | TestimonialsSection
  | PricingSection
  | FAQSection
  | ContactSection
  | FooterSection;