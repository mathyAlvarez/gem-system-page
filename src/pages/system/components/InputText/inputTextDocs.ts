import type { InputTextBorder, InputTextSize } from "@gem-org/gem-system";

export const inputTextSizes: InputTextSize[] = ["sm", "md", "lg"];

export const inputTextBorders: InputTextBorder[] = [
  "default",
  "outlined",
  "borderless",
  "primary",
  "success",
  "warning",
  "error",
  "info",
];

export const inputTextTypes = ["text", "email", "tel", "url", "search", "password"] as const;

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const inputTextProps = [
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "type", type: union(inputTextTypes), defaultValue: '"text"' },
  { name: "placeholder", type: "string", defaultValue: "—" },
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
  { name: "size", type: union(inputTextSizes), defaultValue: '"md"' },
  { name: "border", type: "InputTextBorder", defaultValue: '"default"' },
  { name: "validRegex", type: "RegExp | string", defaultValue: "—" },
  { name: "uppercase", type: "boolean", defaultValue: "false" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
  { name: "onValidate", type: "(isValid: boolean, value: string) => void", defaultValue: "—" },
  { name: "clearable", type: "boolean", defaultValue: "false" },
  { name: "clearLabel", type: "string", defaultValue: '"Clear"' },
  { name: "onClear", type: "() => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

const messageTones = ["error", "primary", "success", "warning", "info"] as const;

export const inputTextCssClasses = [
  { name: ".gem-input-text", rule: "root" as const },
  { name: ".gem-field-clear", rule: "clear" as const },
  { name: ".gem-input-text__label", rule: "label" as const },
  { name: ".gem-input-text__required", rule: "required" as const },
  { name: ".gem-input-text__field", rule: "field" as const },
  { name: ".gem-input-text__control", rule: "control" as const },
  { name: ".gem-input-text__icon", rule: "icon" as const },
  { name: ".gem-input-text__icon--prefix", rule: "prefix" as const },
  { name: ".gem-input-text__icon--suffix", rule: "suffix" as const },
  { name: ".gem-input-text__message", rule: "message" as const },
  ...messageTones.map((value) => ({
    name: `.gem-input-text__message--${value}`,
    rule: "messageTone" as const,
    value,
  })),
  ...inputTextSizes.map((value) => ({
    name: `.gem-input-text--${value}`,
    rule: "size" as const,
    value,
  })),
  ...inputTextBorders.map((value) => ({
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
  { name: ".gem-input-text--uppercase", rule: "uppercase" as const },
];

export const inputTextCssVariables = ["--gem-input-prefix-pad", "--gem-input-suffix-pad"] as const;

export const inputTextTokens = [
  "--gem-color-border",
  "--gem-color-accent",
  "--gem-shadow-focus",
  "--gem-shadow-xs",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-error-600",
  "--gem-radius-md",
  "--gem-font-sans",
] as const;
