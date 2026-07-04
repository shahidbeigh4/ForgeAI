import { WebsiteSchema } from "../schema/website";
import { componentRegistry } from "../registry";

type Props = {
  schema: WebsiteSchema;
};

export default function WebsiteRenderer({ schema }: Props) {
  return (
    <div className="space-y-8">
      {schema.sections.map((section) => {
        const Component =
          componentRegistry[
            section.type as keyof typeof componentRegistry
          ];

        if (!Component) {
          return (
            <div
              key={section.id}
              className="rounded-lg border border-red-500 p-4"
            >
              Unknown section: {section.type}
            </div>
          );
        }

        return (
          <Component
            key={section.id}
            {...(section.props as Record<string, unknown>)}
          />
        );
      })}
    </div>
  );
}