export type SectionType =
  | "hero"
  | "about"
  | "features"
  | "services"
  | "gallery"
  | "pricing"
  | "testimonials"
  | "contact"
  | "footer";

export interface WebsiteSection {
  id: string;
  type: SectionType;
  props: Record<string, unknown>;
}

export interface WebsiteSchema {
  id: string;
  name: string;
  description: string;
  theme: string;
  sections: WebsiteSection[];
}