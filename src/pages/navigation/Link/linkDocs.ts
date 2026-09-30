import type { LinkSize, LinkTone, LinkUnderline } from "@gem-org/gem-system";

export const linkTones: LinkTone[] = ["primary", "secondary", "tertiary", "danger", "success", "warning", "info", "neutral", "muted"];
export const linkSizes: LinkSize[] = ["sm", "md", "lg"];
export const linkUnderlines: LinkUnderline[] = ["always", "hover", "none"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const linkProps = [
  { name: "href", type: "string", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "tone", type: union(linkTones), defaultValue: '"primary"' },
  { name: "size", type: union(linkSizes), defaultValue: '"md"' },
  { name: "underline", type: union(linkUnderlines), defaultValue: '"hover"' },
  { name: "leftIcon", type: "ReactNode", defaultValue: "—" },
  { name: "rightIcon", type: "ReactNode", defaultValue: "—" },
  { name: "isExternal", type: "boolean", defaultValue: "—" },
  { name: "showExternalIcon", type: "boolean", defaultValue: "—" },
  { name: "externalLabel", type: "string", defaultValue: '"Opens in a new tab"' },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isCurrent", type: "boolean", defaultValue: "false" },
  { name: "target", type: "string", defaultValue: "—" },
  { name: "rel", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "LinkClassNames", defaultValue: "—" },
  { name: "onClick", type: "MouseEventHandler<HTMLAnchorElement>", defaultValue: "—" },
] as const;

export const linkCssClasses = [
  { name: ".gem-link", rule: "root" },
  { name: ".gem-link--{tone}", rule: "tone" },
  { name: ".gem-link--{size}", rule: "size" },
  { name: ".gem-link--underline-{underline}", rule: "underline" },
  { name: ".gem-link--external", rule: "external" },
  { name: ".gem-link--current", rule: "current" },
  { name: ".gem-link--disabled", rule: "disabled" },
  { name: ".gem-link__label", rule: "label" },
  { name: ".gem-link__icon", rule: "icon" },
  { name: ".gem-link__sr", rule: "sr" },
] as const;

export const linkCssVariables = ["--gem-link-fg", "--gem-link-fg-hover", "--gem-link-fg-active"] as const;

export const linkTokens = [
  "--gem-color-primary-600",
  "--gem-color-primary-700",
  "--gem-color-primary-800",
  "--gem-color-{tone}-600",
  "--gem-color-fg-muted",
  "--gem-color-fg",
  "--gem-radius-sm",
  "--gem-shadow-focus",
  "--gem-font-sans",
] as const;
