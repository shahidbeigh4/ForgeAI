"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
};

export default function PromptInput({
  value,
  onChange,
  onGenerate,
  loading,
}: Props) {
  return (
    <div className="flex h-full flex-col">

      <div>
        <h1 className="text-5xl font-black tracking-tight">
          ForgeAI
        </h1>

        <p className="mt-4 text-gray-400">
          Build entire websites using AI.
        </p>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your website..."
        className="
          mt-10
          flex-1
          resize-none
          rounded-2xl
          border
          border-white/10
          bg-gradient-to-br
          from-white/5
          to-blue-500/10
          p-6
          text-lg
          text-white
          outline-none
          transition
          focus:border-blue-500
        "
      />

      <button
        disabled={loading}
        onClick={onGenerate}
        className="
          mt-8
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-violet-600
          py-4
          text-lg
          font-semibold
          shadow-xl
          transition
          hover:scale-[1.02]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "🤖 Generating..." : "✨ Generate Website"}
      </button>

    </div>
  );
}