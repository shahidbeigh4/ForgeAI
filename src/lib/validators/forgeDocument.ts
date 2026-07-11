import { z } from "zod";

export const HeroPropsSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  buttonText: z.string(),
});

export const AISectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("hero"),
    props: HeroPropsSchema,
  }),

  z.object({
    type: z.literal("features"),
    props: z.record(z.string(), z.unknown()).default({}),
  }),

  z.object({
    type: z.literal("contact"),
    props: z.record(z.string(), z.unknown()).default({}),
  }),

  z.object({
    type: z.literal("footer"),
    props: z.record(z.string(), z.unknown()).default({}),
  }),
]);

export const AIDocumentSchema = z.object({
  name: z.string(),

  business: z.enum([
    "education",
    "hotel",
    "restaurant",
    "portfolio",
    "startup",
  ]),

  theme: z.enum([
    "modern",
    "minimal",
    "luxury",
    "dark",
  ]),

  sections: z.array(AISectionSchema),
});