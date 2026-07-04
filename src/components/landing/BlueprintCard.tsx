import { WebsiteBlueprint } from "@/types/website";

type Props = {
  blueprint: WebsiteBlueprint;
};

export default function BlueprintCard({ blueprint }: Props) {
  return (
    <div className="rounded-xl bg-[#0B1220] p-6 border border-gray-700">

      <h2 className="text-2xl font-bold">
        {blueprint.projectName}
      </h2>

      <h3 className="mt-6 font-semibold">
        Pages
      </h3>

      <ul className="mt-2 list-disc ml-5 text-gray-300">
        {blueprint.pages.map((page) => (
          <li key={page}>{page}</li>
        ))}
      </ul>

      <h3 className="mt-6 font-semibold">
        Features
      </h3>

      <ul className="mt-2 list-disc ml-5 text-gray-300">
        {blueprint.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}