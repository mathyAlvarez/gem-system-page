export const SKELETON_VARIANTS = ["text", "circular", "rectangular"] as const;
export const SKELETON_ANIMATIONS = ["wave", "pulse", "none"] as const;
export const SKELETON_RADII = ["none", "sm", "md", "lg", "full"] as const;

export type SkeletonPerson = { name: string; role: string; summary: string };
