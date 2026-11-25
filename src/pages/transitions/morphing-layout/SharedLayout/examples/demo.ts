export const SHARED_LAYOUT_EASINGS = ["standard", "enter", "exit", "emphasized", "linear"] as const;
export const SHARED_LAYOUT_DURATIONS = ["200", "300", "360", "420"] as const;
export const SHARED_LAYOUT_DELAYS = ["0", "40", "120"] as const;

export const SHARED_LAYOUT_GALLERY = [
  { id: "alpha", label: "Alpha" },
  { id: "beta", label: "Beta" },
  { id: "gamma", label: "Gamma" },
] as const;

export type SharedLayoutGalleryId = (typeof SHARED_LAYOUT_GALLERY)[number]["id"];
