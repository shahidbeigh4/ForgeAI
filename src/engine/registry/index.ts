import Hero from "@/components/generated/Hero";
import Features from "@/components/generated/Features";
import Contact from "@/components/generated/Contact";
import Footer from "@/components/generated/Footer";

export const componentRegistry = {
  hero: Hero,
  features: Features,
  contact: Contact,
  footer: Footer,
} as const;