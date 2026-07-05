import { ForgeDocument } from "@/engine/schema/document";
import WebsiteRenderer from "@/engine/renderer/WebsiteRenderer";

type Props = {
  document: ForgeDocument;
};

export default function PreviewPanel({
  document,
}: Props) {
  return (
    <div className="mx-auto max-w-6xl">

      <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

        <div className="flex items-center gap-2 border-b border-white/10 bg-[#202124] px-5 py-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-6 text-sm text-gray-400">
            Preview
          </div>

        </div>

        <div className="bg-[#0B1120] p-10">

          <WebsiteRenderer document={document} />

        </div>

      </div>

    </div>
  );
}