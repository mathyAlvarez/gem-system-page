export const FLIP_LIST_TILES = ["Inbox", "Starred", "Snoozed", "Sent", "Drafts"] as const;
export const FLIP_LIST_GRID_TILES = [
  "Alpha",
  "Bravo",
  "Charlie",
  "November",
  "Oscar",
  "Sierra",
] as const;
export const FLIP_LIST_LONG_TILES = [
  ...FLIP_LIST_TILES,
  "Archive",
  "Spam",
  "Trash",
  "Important",
  "Personal",
  "Travel",
  "Work",
  "Receipts",
] as const;

export type FlipListFilterId = "all" | "early" | "late";

export const FLIP_LIST_AXES = ["both", "y", "x"] as const;
export const FLIP_LIST_EASINGS = ["emphasized", "standard", "enter", "exit", "linear"] as const;
export const FLIP_LIST_DURATIONS = ["240", "300", "360", "420"] as const;
export const FLIP_LIST_DELAYS = ["0", "40", "80"] as const;
export const FLIP_LIST_STAGGER_DELAYS = ["0", "30", "50", "55"] as const;
export const FLIP_LIST_DISTANCES = ["0", "8", "16", "24"] as const;

export function shuffleLabels<T>(list: readonly T[]): T[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i];
    const swap = next[j];
    if (current === undefined || swap === undefined) continue;
    next[i] = swap;
    next[j] = current;
  }
  return next;
}

export function namesBeforeM(labels: readonly string[]): string[] {
  return labels.filter((label) => label.localeCompare("M") < 0);
}

export function namesFromM(labels: readonly string[]): string[] {
  return labels.filter((label) => label.localeCompare("M") >= 0);
}

export function applyFlipFilter(labels: readonly string[], filter: FlipListFilterId): string[] {
  if (filter === "early") return namesBeforeM(labels);
  if (filter === "late") return namesFromM(labels);
  return [...labels];
}

export function listNames(labels: readonly string[]): string {
  return labels.join(", ");
}
