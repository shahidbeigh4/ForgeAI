import GeneratedHero from "./Hero";
import { WebsiteBlueprint } from "@/types/website";

type Props = {
  blueprint: WebsiteBlueprint;
};

export default function WebsiteRenderer({
  blueprint,
}: Props) {
  return (
    <div className="space-y-8">

      <GeneratedHero
        title={blueprint.projectName}
        subtitle="Powered by ForgeAI"
      />

    </div>
  );
}