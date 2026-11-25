export const VIEW_TRANSITION_TABS = ["Inbox", "Starred", "Sent"] as const;
export type ViewTransitionTab = (typeof VIEW_TRANSITION_TABS)[number];

const PANEL_MOD: Record<ViewTransitionTab, string> = {
  Inbox: "view-transition-demo__panel--inbox",
  Starred: "view-transition-demo__panel--starred",
  Sent: "view-transition-demo__panel--sent",
};

/** Panel class with a distinct surface per tab (helps slide/scale read clearly). */
export function viewPanelClass(tab: ViewTransitionTab, extra = ""): string {
  return ["view-transition-demo__panel", PANEL_MOD[tab], extra].filter(Boolean).join(" ");
}

export const VIEW_TRANSITION_EFFECTS = [
  "fade",
  "slide-left",
  "slide-right",
  "slide-up",
  "slide-down",
  "scale",
] as const;

export const VIEW_TRANSITION_FALLBACKS = ["fade", "none"] as const;
export const VIEW_TRANSITION_EASINGS = [
  "standard",
  "enter",
  "exit",
  "emphasized",
  "linear",
] as const;
export const VIEW_TRANSITION_DURATIONS = ["240", "300", "360", "420"] as const;
export const VIEW_TRANSITION_DELAYS = ["0", "40", "80"] as const;
