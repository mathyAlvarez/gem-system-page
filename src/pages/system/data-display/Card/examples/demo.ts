export const CARD_SIZES = ["sm", "md", "lg"] as const;
export const CARD_RADII = ["sm", "md", "lg"] as const;
export const CARD_SHADOWS = ["none", "xs", "sm", "md", "lg", "xl"] as const;

export type CardCommon = {
  title: string;
  subtitle: string;
  body: string;
  more: string;
  cancel: string;
  save: string;
};
