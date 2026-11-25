export const PUSH_STACK_STEPS = ["Account", "Address", "Review"] as const;
export type PushStackStep = (typeof PUSH_STACK_STEPS)[number];

export const PUSH_STACK_AXES = ["x", "y"] as const;
export const PUSH_STACK_MODES = ["sync", "wait", "pop-layout"] as const;
export const PUSH_STACK_EASINGS = ["standard", "enter", "exit", "emphasized", "linear"] as const;
export const PUSH_STACK_DURATIONS = ["240", "300", "320", "420"] as const;
export const PUSH_STACK_DELAYS = ["0", "40", "80"] as const;
export const PUSH_STACK_PAGINATION = ["none", "3", "inside-end", "inside-start"] as const;
