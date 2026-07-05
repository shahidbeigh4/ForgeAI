import Features from "@/components/generated/Features";
import { Plugin } from "./Plugin";

export const FeaturesPlugin: Plugin<{}> = {
  type: "features",

  Component: Features,

  defaultProps: {},

  validate() {
    return true;
  },
};