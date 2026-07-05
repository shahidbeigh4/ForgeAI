import { ForgeDocument } from "../schema/document";
import { pluginRegistry } from "../plugins";

type Props = {
  document: ForgeDocument;
};

export default function WebsiteRenderer({
  document,
}: Props) {
  return (
    <div className="space-y-8">
      {document.sections.map((section) => {
        const plugin = pluginRegistry[section.type];

        if (!plugin) {
          return (
            <div
              key={section.id}
              className="rounded bg-red-500 p-4"
            >
              Unknown plugin: {section.type}
            </div>
          );
        }

        const Component = plugin.Component;

        return (
          <Component
            key={section.id}
            {...section.props}
          />
        );
      })}
    </div>
  );
}