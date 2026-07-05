export interface PromptAnalysis {
  prompt: string;
  normalized: string;
  words: string[];
}

export function analyzePrompt(
  prompt: string
): PromptAnalysis {
  const normalized = prompt
    .trim()
    .toLowerCase();

  return {
    prompt,
    normalized,
    words: normalized.split(/\s+/),
  };
}