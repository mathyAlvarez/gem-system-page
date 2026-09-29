import type { ButtonShadows, ButtonSize, ButtonVariant } from "@gem-org/gem-system";

export const buttonVariants: ButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "transparent",
  "danger",
  "success",
  "warning",
  "info",
  "neutral",
  "link",
];

export const buttonSizes: ButtonSize[] = ["sm", "md", "lg", "xl"];

export const buttonShadows: ButtonShadows[] = ["none", "sm", "md", "lg", "xl"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const buttonProps = [
  { name: "variant", type: union(buttonVariants), defaultValue: '"primary"' },
  { name: "size", type: union(buttonSizes), defaultValue: '"md"' },
  { name: "shadow", type: union(buttonShadows), defaultValue: '"none"' },
  { name: "hovered", type: "boolean", defaultValue: "true" },
  { name: "isLoading", type: "boolean", defaultValue: "false" },
  { name: "iconOnly", type: "boolean", defaultValue: "false" },
  { name: "rounded", type: "boolean", defaultValue: "false" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "leftIcon", type: "ReactNode", defaultValue: "—" },
  { name: "rightIcon", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "type", type: '"button" | "submit" | "reset"', defaultValue: '"button"' },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "onHover", type: "(isHovered: boolean) => void", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLButtonElement>", defaultValue: "—" },
] as const;

export type ButtonPropName = (typeof buttonProps)[number]["name"];

export const buttonCssClasses = [
  { name: ".gem-button", rule: "root" },
  { name: ".gem-button__label", rule: "label" },
  { name: ".gem-button__icon", rule: "icon" },
  { name: ".gem-button__spinner", rule: "spinner" },
  ...buttonVariants.map((value) => ({ name: `.gem-button--${value}`, rule: "variant" as const, value })),
  ...buttonSizes.map((value) => ({ name: `.gem-button--${value}`, rule: "size" as const, value })),
  ...buttonShadows.map((value) => ({ name: `.gem-button--shadow-${value}`, rule: "shadow" as const, value })),
  { name: ".gem-button--icon-only", rule: "iconOnly" },
  { name: ".gem-button--rounded", rule: "rounded" },
  { name: ".gem-button--loading", rule: "loading" },
  { name: ".gem-button--no-hover", rule: "noHover" },
] as const;

export type ButtonCssRule = (typeof buttonCssClasses)[number]["rule"];

export const buttonCssVariables = [
  "--gem-btn-bg",
  "--gem-btn-border",
  "--gem-btn-fg",
  "--gem-btn-bg-hover",
  "--gem-btn-border-hover",
  "--gem-btn-fg-hover",
] as const;

export type ButtonCssVariable = (typeof buttonCssVariables)[number];
