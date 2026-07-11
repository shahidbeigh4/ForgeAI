import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
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

      <div className="space-y-16">
        {document.sections.map((section) => {
          switch (section.type) {
            case "hero":
              return (
                <Hero
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

            default:
              return null;
          }
        })}
      </div>
    </>
  );
}