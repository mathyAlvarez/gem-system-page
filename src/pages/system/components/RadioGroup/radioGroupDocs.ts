import type { RadioOrientation, RadioSize, RadioTone } from "@gem-org/gem-system";

export const radioGroupTones: RadioTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export const radioGroupSizes: RadioSize[] = ["sm", "md", "lg"];

export const radioGroupOrientations: RadioOrientation[] = ["vertical", "horizontal"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const radioGroupProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "name", type: "string", defaultValue: "useId()" },
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "size", type: union(radioGroupSizes), defaultValue: '"md"' },
  { name: "tone", type: union(radioGroupTones), defaultValue: '"primary"' },
  { name: "orientation", type: union(radioGroupOrientations), defaultValue: '"vertical"' },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "id", type: "string", defaultValue: "useId()" },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  {
    name: "onChange",
    type: "(value: string, event: ChangeEvent<HTMLInputElement>) => void",
    defaultValue: "—",
  },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
  { name: "onKeyDown", type: "KeyboardEventHandler<HTMLDivElement>", defaultValue: "—" },
] as const;

export const radioGroupCssClasses = [
  { name: ".gem-radio-group", rule: "root" as const },
  { name: ".gem-radio-group__options", rule: "options" as const },
  { name: ".gem-radio-group__message", rule: "message" as const },
  { name: ".gem-radio-group__message--error", rule: "messageError" as const },
  ...radioGroupOrientations.map((value) => ({
    name: `.gem-radio-group--${value}`,
    rule: "orientation" as const,
    value,
  })),
  ...radioGroupSizes.map((value) => ({
    name: `.gem-radio-group--${value}`,
    rule: "size" as const,
    value,
  })),
  { name: ".gem-radio-group--invalid", rule: "invalid" as const },
  { name: ".gem-radio-group--disabled", rule: "disabled" as const },
  { name: ".gem-field-header", rule: "header" as const },
  { name: ".gem-field-header__label-text", rule: "labelText" as const },
  { name: ".gem-field-header__required", rule: "required" as const },
  { name: ".gem-field-info", rule: "info" as const },
];

export const radioGroupTokens = [
  "--gem-space-2",
  "--gem-color-fg-muted",
  "--gem-color-error-600",
  "--gem-font-sans",
] as const;
