export function detectTheme(prompt: string) {
  const text = prompt.toLowerCase();

  if (text.includes("luxury"))
    return "luxury";

  if (text.includes("minimal"))
    return "minimal";

  if (text.includes("dark"))
    return "dark";

  return "modern";
}