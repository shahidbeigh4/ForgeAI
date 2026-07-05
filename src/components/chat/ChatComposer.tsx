type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  loading: boolean;
};

export default function ChatComposer({
  value,
  onChange,
  onSend,
  loading,
}: Props) {
  return (
    <div className="border-t border-white/10 pt-4">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your website..."
        className="h-28 w-full resize-none rounded-xl bg-white/5 p-4 outline-none"
      />

      <button
        disabled={loading}
        onClick={onSend}
        className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Send"}
      </button>
    </div>
  );
}