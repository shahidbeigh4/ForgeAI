export function normalizePrompt(prompt: string): string {
  return prompt
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}