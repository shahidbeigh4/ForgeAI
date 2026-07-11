import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import { ForgeDocument } from "../schema/document";

type Props = {
  document: ForgeDocument;
};

export default function WebsiteRenderer({
  document,
}: Props) {
  return (
    <>
      <Navbar />

      <main className="space-y-16">

        {document.sections.map((section) => {

          switch (section.type) {

            case "hero":
              return (
                <Hero
                  key={section.id}
                  {...section.props}
                />
              );

            case "about":
              return (
                <About
                  key={section.id}
                  {...section.props}
                />
              );

            case "features":
              return (
                <Features
                  key={section.id}
                  {...section.props}
                />
              );

            case "testimonials":
              return (
                <Testimonials
                  key={section.id}
                  {...section.props}
                />
              );

            case "pricing":
              return (
                <Pricing
                  key={section.id}
                  {...section.props}
                />
              );

            case "faq":
              return (
                <FAQ
                  key={section.id}
                  {...section.props}
                />
              );

            case "contact":
              return (
                <Contact
                  key={section.id}
                  {...section.props}
                />
              );

            case "footer":
              return (
                <Footer
                  key={section.id}
                  {...section.props}
                />
              );

            default: {
              const exhaustive: never = section;
              return exhaustive;
            }

          }

        })}

      </main>
    </>
  );
}