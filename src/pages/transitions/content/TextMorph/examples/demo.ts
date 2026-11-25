export const TEXT_MORPH_EFFECTS = ["up", "down", "fade"] as const;
export const TEXT_MORPH_SPLIT_BY = ["words", "characters", "lines"] as const;
export const TEXT_MORPH_EASINGS = [
  "default",
  "standard",
  "enter",
  "exit",
  "emphasized",
  "linear",
] as const;
export const TEXT_MORPH_DURATIONS = ["200", "300", "500"] as const;
export const TEXT_MORPH_DELAYS = ["0", "100", "250"] as const;
export const TEXT_MORPH_STAGGERS = ["0", "40", "60"] as const;

/** Folder-style titles (Inbox / Starred / Sent). */
export const TEXT_MORPH_TITLES = ["Inbox", "Starred", "Sent"] as const;

/** Short phrases for word stagger demos. */
export const TEXT_MORPH_PHRASES = [
  "Quick update ready",
  "New message waiting",
  "All caught up",
] as const;

/** Multi-line blocks for `splitBy="lines"`. */
export const TEXT_MORPH_LINES = [
  "Inbox\n3 unread",
  "Starred\n12 saved",
  "Sent\nLast week",
] as const;

/** Label shown on a button for a multi-line option. */
export function lineOptionLabel(value: string) {
  return value.includes("\n") ? value.replace("\n", " / ") : value;
}
