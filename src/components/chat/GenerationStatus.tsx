type Props = {
  step: string;
};

export default function GenerationStatus({ step }: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

      <div className="mb-4 flex items-center gap-3">

        <div className="h-4 w-4 animate-ping rounded-full bg-blue-400" />

        <h3 className="text-lg font-semibold">
          ForgeAI is building your website...
        </h3>

      </div>

      <p className="text-gray-300">{step}</p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

      </div>

    </div>
  );
}