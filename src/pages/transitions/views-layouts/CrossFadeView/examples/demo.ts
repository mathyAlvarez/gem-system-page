export const CROSS_FADE_MODES = ["sync", "wait", "pop-layout"] as const;
export const CROSS_FADE_EASINGS = ["standard", "enter", "exit", "emphasized", "linear"] as const;
export const CROSS_FADE_DURATIONS = ["220", "280", "300", "420"] as const;
export const CROSS_FADE_DELAYS = ["0", "40", "80"] as const;
export const CROSS_FADE_PAGINATION = ["none", "2", "3", "inside-end", "inside-start"] as const;

export const CROSS_FADE_TABS = ["Inbox", "Starred", "Sent"] as const;
export type CrossFadeTab = (typeof CROSS_FADE_TABS)[number];
