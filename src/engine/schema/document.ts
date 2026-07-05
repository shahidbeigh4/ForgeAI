import {
  BusinessType,
  ThemeType,
  WebsiteSection,
} from "./website";

export interface ForgeDocument {
  id: string;

  name: string;

  business: BusinessType;

  theme: ThemeType;

  sections: WebsiteSection[];
}