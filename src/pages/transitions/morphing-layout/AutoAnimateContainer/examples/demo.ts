export const AUTO_ANIMATE_AXES = ["height", "width", "both"] as const;
export const AUTO_ANIMATE_OVERFLOWS = ["hidden", "visible", "clip"] as const;
export const AUTO_ANIMATE_EASINGS = ["standard", "enter", "exit", "emphasized", "linear"] as const;
export const AUTO_ANIMATE_DURATIONS = ["200", "300", "420"] as const;
export const AUTO_ANIMATE_DELAYS = ["0", "40", "120"] as const;

export const AUTO_ANIMATE_PANELS = [
  { id: "brief", labelKey: "brief" as const },
  { id: "detail", labelKey: "detail" as const },
  { id: "full", labelKey: "full" as const },
] as const;

export type AutoAnimatePanelId = (typeof AUTO_ANIMATE_PANELS)[number]["id"];
