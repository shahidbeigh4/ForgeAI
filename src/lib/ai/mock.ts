import { WebsiteBlueprint } from "@/types/website";

export async function generateWebsiteBlueprint(
  prompt: string
): Promise<WebsiteBlueprint> {

  console.log("Prompt:", prompt);

  return {
    projectName: "Foundation Blocks Coaching",

    pages: [
      "Home",
      "About",
      "Courses",
      "Admissions",
      "Gallery",
      "Testimonials",
      "Contact"
    ],

    theme: {
      primary: "#2563EB",
      secondary: "#111827",
      style: "Modern"
    },

    features: [
      "Online Admissions",
      "WhatsApp Chat",
      "Student Dashboard",
      "Gallery"
    ]
  };
}