export const AVATAR_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;
export const AVATAR_RADII = ["sm", "md", "lg", "full"] as const;
export const AVATAR_TONES = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
] as const;
export const AVATAR_STATUSES = ["online", "offline", "busy", "away"] as const;
export const AVATAR_STATUS_POSITIONS = ["right", "centered"] as const;

export const PHOTO = "https://i.pravatar.cc/160?img=5";

export const PEOPLE = [
  { name: "Amina Costa", src: "https://i.pravatar.cc/128?img=5", status: "online" },
  { name: "Noah Berg", src: "https://i.pravatar.cc/128?img=12", status: "away" },
  { name: "Sofia Rahman", src: "https://i.pravatar.cc/128?img=32", status: "busy" },
  { name: "Liam Chen", src: "https://i.pravatar.cc/128?img=15", status: "online" },
  { name: "Elena Voss", src: "https://i.pravatar.cc/128?img=47", status: "offline" },
] as const;

export type AvatarStatusKey = (typeof AVATAR_STATUSES)[number];

export type AvatarCommon = { statuses: Record<AvatarStatusKey, string> };
