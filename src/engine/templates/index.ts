import education from "./education";
import hotel from "./hotel";
import restaurant from "./restaurant";
import portfolio from "./portfolio";
import startup from "./startup";

const templates = {
  education,
  hotel,
  restaurant,
  portfolio,
  startup,
};

export type Template = typeof education;

export function getTemplate(
  business: keyof typeof templates
): Template {
  return templates[business];
}