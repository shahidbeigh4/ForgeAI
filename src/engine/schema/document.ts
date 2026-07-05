import { WebsiteSection } from "./website";

export interface ForgeDocument {
  id: string;
  name: string;
  sections: WebsiteSection[];
}