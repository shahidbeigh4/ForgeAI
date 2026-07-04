export default function PreviewPanel() {
  return (
    <div className="flex h-[600px] items-center justify-center rounded-2xl border border-gray-800 bg-[#111827]">
      <div className="text-center">
        <h2 className="text-2xl font-bold">🌐 Live Preview</h2>

        <p className="mt-3 text-gray-400">
          Your generated website will appear here.
        </p>
      </div>
    </div>
  );
}