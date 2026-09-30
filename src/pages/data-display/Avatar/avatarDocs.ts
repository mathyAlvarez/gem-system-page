export const avatarProps = [
  { name: "src", type: "string", defaultValue: "—" },
  { name: "name", type: "string", defaultValue: "—" },
  { name: "alt", type: "string", defaultValue: "name" },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"' },
  { name: "radius", type: '"sm" | "md" | "lg" | "full"', defaultValue: '"full"' },
  {
    name: "tone",
    type: '"primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "info" | "neutral"',
    defaultValue: "auto",
  },
  { name: "status", type: '"online" | "offline" | "busy" | "away"', defaultValue: "—" },
  { name: "statusPosition", type: '"right" | "centered"', defaultValue: '"right"' },
  { name: "bordered", type: "boolean", defaultValue: "false" },
  { name: "icon", type: "ReactNode", defaultValue: "<User />" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "imgProps", type: "ImgHTMLAttributes<HTMLImageElement>", defaultValue: "—" },
  { name: "role", type: "AriaRole", defaultValue: "auto" },
  { name: "aria-label", type: "string", defaultValue: "auto" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "AvatarClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLSpanElement>", defaultValue: "—" },
] as const;

export const avatarGroupProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"' },
  { name: "radius", type: '"sm" | "md" | "lg" | "full"', defaultValue: '"full"' },
  { name: "max", type: "number", defaultValue: "—" },
  { name: "total", type: "number", defaultValue: "children" },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "AvatarGroupClassNames", defaultValue: "—" },
] as const;

export const avatarHelpers = [
  { key: "initials", name: "getAvatarInitials(name, max?)", type: "string", defaultValue: "max = 2" },
  { key: "tone", name: "getAvatarTone(name)", type: "AvatarTone", defaultValue: "—" },
] as const;

export const avatarCssClasses = [
  { name: ".gem-avatar", rule: "root" },
  { name: ".gem-avatar--md", rule: "size" },
  { name: ".gem-avatar--radius-full", rule: "radius" },
  { name: ".gem-avatar--primary", rule: "tone" },
  { name: ".gem-avatar--bordered", rule: "bordered" },
  { name: ".gem-avatar--has-image", rule: "hasImage" },
  { name: ".gem-avatar__face", rule: "face" },
  { name: ".gem-avatar__image", rule: "image" },
  { name: ".gem-avatar__fallback", rule: "fallback" },
  { name: ".gem-avatar__initials", rule: "initials" },
  { name: ".gem-avatar__icon", rule: "icon" },
  { name: ".gem-avatar__status", rule: "status" },
  { name: ".gem-avatar__status--online", rule: "statusValue" },
  { name: ".gem-avatar__status--right", rule: "statusPosition" },
  { name: ".gem-avatar-group", rule: "group" },
  { name: ".gem-avatar-group__item", rule: "groupItem" },
  { name: ".gem-avatar-group__overflow", rule: "overflow" },
] as const;

export const avatarCssVariables = [
  "--gem-avatar-size",
  "--gem-avatar-font",
  "--gem-avatar-icon",
  "--gem-avatar-status",
  "--gem-avatar-ring",
] as const;

export const avatarTokens = [
  "--gem-color-{tone}-500",
  "--gem-color-neutral-300",
  "--gem-color-neutral-400",
  "--gem-palette-neutral-0",
  "--gem-color-fg",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-{success|error|warning}-solid",
  "--gem-radius-{sm|md|lg|full}",
  "--gem-space-2",
  "--gem-font-sans",
] as const;
