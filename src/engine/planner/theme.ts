import { PromptAnalysis } from "./analyzer";

export type ThemeType =
  | "modern"
  | "minimal"
  | "luxury"
  | "dark";

export function detectTheme(
  analysis: PromptAnalysis
): ThemeType {

  const text = analysis.normalized;

  if (text.includes("luxury"))
    return "luxury";

  if (text.includes("minimal"))
    return "minimal";

  if (text.includes("dark"))
    return "dark";

  return "modern";
}