import Contact from "@/components/generated/Contact";
import { Plugin } from "./Plugin";

export const ContactPlugin: Plugin<{}> = {
  type: "contact",

  Component: Contact,

  defaultProps: {},

  validate() {
    return true;
  },
};