import Hero from "@/components/generated/Hero";
import Features from "@/components/generated/Features";
import Contact from "@/components/generated/Contact";
import Footer from "@/components/generated/Footer";

import { ForgeDocument } from "../schema/document";

type Props = {
  document: ForgeDocument;
};

export default function WebsiteRenderer({ document }: Props) {
  return (
    <div className="space-y-16">
      {document.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return (
              <Hero
                key={section.id}
                title={section.props.title}
                subtitle={section.props.subtitle}
                buttonText={section.props.buttonText}
              />
            );

          case "features":
            return <Features key={section.id} />;

          case "contact":
            return <Contact key={section.id} />;

          case "footer":
            return <Footer key={section.id} />;

          default: {
  const _exhaustive: never = section;
  return null;
}
        }
      })}
    </div>
  );
}