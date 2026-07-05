import GeneratedHero from "@/components/generated/Hero";
import { Plugin } from "./Plugin";
import { HeroProps } from "../schema/website";

export const HeroPlugin: Plugin<HeroProps> = {
  type: "hero",

  Component: GeneratedHero,

  defaultProps: {
    title: "New Website",
    subtitle: "Powered by ForgeAI",
    buttonText: "Get Started",
  },

  validate(props) {
    return (
      props.title.length > 0 &&
      props.subtitle.length > 0 &&
      props.buttonText.length > 0
    );
  },
};