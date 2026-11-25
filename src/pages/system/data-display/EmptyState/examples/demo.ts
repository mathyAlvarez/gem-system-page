export const EMPTY_STATE_KINDS = ["empty", "search", "filter"] as const;
export const EMPTY_STATE_SIZES = ["sm", "md", "lg"] as const;
export const EMPTY_STATE_ALIGNS = ["center", "start"] as const;
export const EMPTY_STATE_RADII = ["sm", "md", "lg"] as const;

export type EmptyStateCopy = { title: string; description: string };
