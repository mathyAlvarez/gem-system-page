export const TOAST_STATUSES = ["info", "success", "warning", "error"] as const;
export const TOAST_VARIANTS = ["soft", "solid", "outline"] as const;
export const TOAST_SIZES = ["sm", "md", "lg"] as const;
export const TOAST_RADII = ["sm", "md", "lg"] as const;
export const TOAST_PLACEMENTS = [
  "top-start",
  "top",
  "top-end",
  "bottom-start",
  "bottom",
  "bottom-end",
] as const;

export type ToastCopy = { title: string; description: string };

export type ToastCommon = {
  closeLabel: string;
  viewportLabel: string;
  copy: Record<(typeof TOAST_STATUSES)[number], ToastCopy>;
};
