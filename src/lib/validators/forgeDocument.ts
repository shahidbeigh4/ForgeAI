import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*                                  HERO                                      */
/* -------------------------------------------------------------------------- */

export const HeroPropsSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  buttonText: z.string(),
});

/* -------------------------------------------------------------------------- */
/*                                  ABOUT                                     */
/* -------------------------------------------------------------------------- */

export const AboutPropsSchema = z.object({
  heading: z.string(),
  description: z.string(),
});

/* -------------------------------------------------------------------------- */
/*                                FEATURES                                    */
/* -------------------------------------------------------------------------- */

export const FeatureItemSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const FeaturesPropsSchema = z.object({
  heading: z.string(),
  items: z.array(FeatureItemSchema),
});

/* -------------------------------------------------------------------------- */
/*                             TESTIMONIALS                                   */
/* -------------------------------------------------------------------------- */

export const TestimonialSchema = z.object({
  name: z.string(),
  role: z.string(),
  review: z.string(),
});

export const TestimonialsPropsSchema = z.object({
  heading: z.string(),
  testimonials: z.array(TestimonialSchema),
});

/* -------------------------------------------------------------------------- */
/*                                 PRICING                                    */
/* -------------------------------------------------------------------------- */

export const PricingPlanSchema = z.object({
  title: z.string(),
  price: z.string(),
  features: z.array(z.string()),
});

export const PricingPropsSchema = z.object({
  heading: z.string(),
  plans: z.array(PricingPlanSchema),
});

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

export const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const FAQPropsSchema = z.object({
  heading: z.string(),
  items: z.array(FAQItemSchema),
});

/* -------------------------------------------------------------------------- */
/*                                 CONTACT                                    */
/* -------------------------------------------------------------------------- */

export const ContactPropsSchema = z.object({
  heading: z.string(),
  subtitle: z.string(),
  buttonText: z.string(),
});

/* -------------------------------------------------------------------------- */
/*                                  FOOTER                                    */
/* -------------------------------------------------------------------------- */

export const FooterPropsSchema = z.object({
  copyright: z.string(),
});

/* -------------------------------------------------------------------------- */
/*                               AI DOCUMENT                                  */
/* -------------------------------------------------------------------------- */

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
        type: z.literal("about"),
        props: AboutPropsSchema,
      }),

      z.object({
        type: z.literal("features"),
        props: FeaturesPropsSchema,
      }),

      z.object({
        type: z.literal("testimonials"),
        props: TestimonialsPropsSchema,
      }),

      z.object({
        type: z.literal("pricing"),
        props: PricingPropsSchema,
      }),

      z.object({
        type: z.literal("faq"),
        props: FAQPropsSchema,
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