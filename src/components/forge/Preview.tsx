import { ForgeDocument } from "@/engine/schema/document";
import WebsiteRenderer from "@/engine/renderer/WebsiteRenderer";

type Props = {
  document: ForgeDocument | null;
};

export default function Preview({
  document,
}: Props) {
  if (!document) {
    return (
      <div className="flex h-full items-center justify-center text-gray-400">
        Your generated website will appear here.
      </div>
    );
  }

  return (
    <div className="p-8">
      <WebsiteRenderer document={document} />
    </div>
  );
}