import Navbar from "@/components/generated/Navbar";
import Hero from "@/components/generated/Hero";
import Features from "@/components/generated/Features";
import Contact from "@/components/generated/Contact";
import Footer from "@/components/generated/Footer";

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