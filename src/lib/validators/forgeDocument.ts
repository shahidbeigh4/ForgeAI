import { z } from "zod";

export const HeroPropsSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  buttonText: z.string(),
});

export const FeaturesPropsSchema = z.object({
  heading: z.string(),
  items: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
});

export const ContactPropsSchema = z.object({
  heading: z.string(),
  subtitle: z.string(),
  buttonText: z.string(),
});

export const FooterPropsSchema = z.object({
  copyright: z.string(),
});

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

  sections: z.array(
    z.discriminatedUnion("type", [
      z.object({
        type: z.literal("hero"),
        props: HeroPropsSchema,
      }),

      z.object({
        type: z.literal("features"),
        props: FeaturesPropsSchema,
      }),

      z.object({
        type: z.literal("contact"),
        props: ContactPropsSchema,
      }),

      z.object({
        type: z.literal("footer"),
        props: FooterPropsSchema,
      }),
    ])
  ),
});