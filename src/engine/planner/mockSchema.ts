import { WebsiteSchema } from "../schema/website";

export const mockSchema: WebsiteSchema = {
  id: "1",
  name: "Foundation Blocks",
  description: "Coaching Centre Website",
  theme: "modern",

  sections: [
    {
      id: "hero",
      type: "hero",
      props: {
        title: "Foundation Blocks",
        subtitle: "Building Strong Foundations",
      },
    },
  ],
};