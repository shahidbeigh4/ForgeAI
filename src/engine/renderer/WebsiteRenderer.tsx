import Navbar from "@/components/generated/Navbar";

import { ForgeDocument } from "../schema/document";
import { componentRegistry } from "../registry";

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
          const Component =
            componentRegistry[section.type];

          if (!Component) return null;

          return (
            <Component
              key={section.id}
              {...section.props}
            />
          );
        })}
      </div>
    </>
  );
}import Navbar from "@/components/generated/Navbar";

import { ForgeDocument } from "../schema/document";
import { componentRegistry } from "../registry";

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
          const Component =
            componentRegistry[
              section.type
            ] as React.ComponentType<any>;

          if (!Component) return null;

          return (
            <Component
              key={section.id}
              {...section.props}
            />
          );
        })}
      </div>
    </>
  );
}