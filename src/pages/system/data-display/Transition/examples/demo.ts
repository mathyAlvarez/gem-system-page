export const TRANSITION_EFFECTS = [
  "fade",
  "scale",
  "slide-up",
  "slide-down",
  "slide-left",
  "slide-right",
  "collapse",
] as const;

export const TRANSITION_DURATIONS = ["120", "220", "400", "800"] as const;
export const TRANSITION_DELAYS = ["0", "100", "300"] as const;
export const TRANSITION_EASINGS = [
  "ease",
  "ease-out",
  "linear",
  "cubic-bezier(0.34, 1.56, 0.64, 1)",
] as const;

export type ToggleCopy = { show: string; hide: string };

export type PanelCopy = { title: string; body: string };
