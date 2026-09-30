import type { InputMaskBorder, InputMaskSize } from "@gem-org/gem-system";

export const inputMaskSizes: InputMaskSize[] = ["sm", "md", "lg"];

export const inputMaskBorders: InputMaskBorder[] = [
  "default",
  "outlined",
  "borderless",
  "primary",
  "success",
  "warning",
  "error",
  "info",
];

export const inputMaskPresets = ["date", "date-iso", "time", "phone", "card"] as const;

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const inputMaskProps = [
  { name: "mask", type: "string", defaultValue: "—" },
  { name: "preset", type: "InputMaskPreset", defaultValue: '"date"' },
  { name: "definitions", type: "Record<string, RegExp>", defaultValue: "—" },
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "type", type: '"text" | "tel" | "search" | "url"', defaultValue: '"text"' },
  { name: "placeholder", type: "string", defaultValue: "—" },
  { name: "maxLength", type: "number", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"above" | "outline"', defaultValue: '"above"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "prefix", type: "ReactNode", defaultValue: "—" },
  { name: "suffix", type: "ReactNode", defaultValue: "—" },
  { name: "prefixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "suffixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: union(inputMaskSizes), defaultValue: '"md"' },
  { name: "border", type: "InputMaskBorder", defaultValue: '"default"' },
  { name: "validRegex", type: "RegExp | string", defaultValue: "—" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
  { name: "onValueChange", type: "(next: InputMaskValue) => void", defaultValue: "—" },
  { name: "onComplete", type: "(next: InputMaskValue) => void", defaultValue: "—" },
  { name: "onValidate", type: "(isValid: boolean, value: string) => void", defaultValue: "—" },
  { name: "clearable", type: "boolean", defaultValue: "false" },
  { name: "clearLabel", type: "string", defaultValue: '"Clear"' },
  { name: "onClear", type: "() => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

export const inputMaskCssClasses = [
  { name: ".gem-input-mask", rule: "root" as const },
  { name: ".gem-field-clear", rule: "clear" as const },
  { name: ".gem-input-text__label", rule: "label" as const },
  { name: ".gem-input-text__required", rule: "required" as const },
  { name: ".gem-input-text__field", rule: "field" as const },
  { name: ".gem-input-text__control", rule: "control" as const },
  { name: ".gem-input-text__icon--prefix", rule: "prefix" as const },
  { name: ".gem-input-text__icon--suffix", rule: "suffix" as const },
  { name: ".gem-input-text__message", rule: "message" as const },
  { name: ".gem-input-text__message--error", rule: "messageError" as const },
  ...inputMaskSizes.map((value) => ({ name: `.gem-input-text--${value}`, rule: "size" as const, value })),
  ...inputMaskBorders.map((value) => ({
    name: `.gem-input-text--border-${value}`,
    rule: "border" as const,
    value,
  })),
  { name: ".gem-input-text--label-outline", rule: "labelOutline" as const },
  { name: ".gem-input-text--has-prefix", rule: "hasPrefix" as const },
  { name: ".gem-input-text--has-suffix", rule: "hasSuffix" as const },
  { name: ".gem-input-text--has-info", rule: "hasInfo" as const },
  { name: ".gem-input-text--invalid", rule: "invalid" as const },
  { name: ".gem-input-text--disabled", rule: "disabled" as const },
];

export const inputMaskCssVariables = ["--gem-input-prefix-pad", "--gem-input-suffix-pad"] as const;

export const inputMaskTokens = [
  "--gem-color-border",
  "--gem-color-accent",
  "--gem-shadow-focus",
  "--gem-color-bg",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-radius-md",
] as const;
