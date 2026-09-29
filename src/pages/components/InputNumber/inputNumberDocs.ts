import type { InputNumberBorder, InputNumberSize } from "@gem-org/gem-system";

export const inputNumberSizes: InputNumberSize[] = ["sm", "md", "lg"];

export const inputNumberBorders: InputNumberBorder[] = [
  "default",
  "outlined",
  "borderless",
  "primary",
  "success",
  "warning",
  "error",
  "info",
];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const inputNumberProps = [
  { name: "value", type: "number | null", defaultValue: "—" },
  { name: "defaultValue", type: "number | null", defaultValue: "null" },
  { name: "min", type: "number", defaultValue: "—" },
  { name: "max", type: "number", defaultValue: "—" },
  { name: "step", type: "number", defaultValue: "1" },
  { name: "precision", type: "number", defaultValue: "—" },
  { name: "showSteppers", type: "boolean", defaultValue: "true" },
  { name: "additionButtons", type: "boolean", defaultValue: "false" },
  { name: "locale", type: "string", defaultValue: "—" },
  { name: "formatOptions", type: "Intl.NumberFormatOptions", defaultValue: "—" },
  { name: "formatDisplay", type: "boolean", defaultValue: "true" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"above" | "outline"', defaultValue: '"above"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "prefixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "suffixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: union(inputNumberSizes), defaultValue: '"md"' },
  { name: "border", type: "InputNumberBorder", defaultValue: '"default"' },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(value: number | null) => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

export const inputNumberCssClasses = [
  { name: ".gem-input-number", rule: "root" as const },
  { name: ".gem-input-number__label", rule: "label" as const },
  { name: ".gem-input-number__required", rule: "required" as const },
  { name: ".gem-input-number__field", rule: "field" as const },
  { name: ".gem-input-number__control", rule: "control" as const },
  { name: ".gem-input-number__step--decrement", rule: "decrement" as const },
  { name: ".gem-input-number__step--increment", rule: "increment" as const },
  { name: ".gem-input-number__addition", rule: "addition" as const },
  { name: ".gem-input-number__addition-btn", rule: "additionBtn" as const },
  { name: ".gem-input-number__icon--prefix", rule: "prefix" as const },
  { name: ".gem-input-number__icon--suffix", rule: "suffix" as const },
  { name: ".gem-input-number__message", rule: "message" as const },
  { name: ".gem-input-number__message--error", rule: "messageError" as const },
  ...inputNumberSizes.map((value) => ({ name: `.gem-input-number--${value}`, rule: "size" as const, value })),
  ...inputNumberBorders.map((value) => ({
    name: `.gem-input-number--border-${value}`,
    rule: "border" as const,
    value,
  })),
  { name: ".gem-input-number--label-outline", rule: "labelOutline" as const },
  { name: ".gem-input-number--has-steppers", rule: "hasSteppers" as const },
  { name: ".gem-input-number--has-addition", rule: "hasAddition" as const },
  { name: ".gem-input-number--has-prefix", rule: "hasPrefix" as const },
  { name: ".gem-input-number--has-suffix", rule: "hasSuffix" as const },
  { name: ".gem-input-number--has-info", rule: "hasInfo" as const },
  { name: ".gem-input-number--invalid", rule: "invalid" as const },
  { name: ".gem-input-number--disabled", rule: "disabled" as const },
];

export const inputNumberTokens = [
  "--gem-color-border",
  "--gem-color-accent",
  "--gem-shadow-focus",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-radius-md",
  "--gem-radius-sm",
] as const;
