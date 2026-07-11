import { ForgeDocument } from "@/engine/schema/document";

export interface AIProvider {
  generateWebsite(
    prompt: string
  ): Promise<ForgeDocument>;
}