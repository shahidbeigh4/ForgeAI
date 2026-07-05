import Footer from "@/components/generated/Footer";
import { Plugin } from "./Plugin";

export const FooterPlugin: Plugin<{}> = {
  type: "footer",

  Component: Footer,

  defaultProps: {},

  validate() {
    return true;
  },
};