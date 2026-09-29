import type { InputSearchBorder, InputSearchSize } from "@gem-org/gem-system";

export const inputSearchSizes: NonNullable<InputSearchSize>[] = ["sm", "md", "lg"];

export const inputSearchBorders: NonNullable<InputSearchBorder>[] = [
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

export const inputSearchProps = [
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "clearable", type: "boolean", defaultValue: "true" },
  { name: "clearLabel", type: "string", defaultValue: '"Clear"' },
  { name: "prefixIcon", type: "ReactNode | null", defaultValue: "<Search />" },
  { name: "suffixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "placeholder", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"above" | "outline"', defaultValue: '"above"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "size", type: union(inputSearchSizes), defaultValue: '"md"' },
  { name: "border", type: "InputSearchBorder", defaultValue: '"default"' },
  { name: "validRegex", type: "RegExp | string", defaultValue: "—" },
  { name: "uppercase", type: "boolean", defaultValue: "false" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
  { name: "onClear", type: "() => void", defaultValue: "—" },
  { name: "onSearch", type: "(value: string) => void", defaultValue: "—" },
  { name: "onValidate", type: "(isValid: boolean, value: string) => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

export const inputSearchCssClasses = [
  { name: ".gem-input-search", rule: "root" as const },
  { name: ".gem-input-search__clear", rule: "clear" as const },
  { name: ".gem-input-text__label", rule: "label" as const },
  { name: ".gem-input-text__field", rule: "field" as const },
  { name: ".gem-input-text__control", rule: "control" as const },
  { name: ".gem-input-text__icon--prefix", rule: "prefix" as const },
  { name: ".gem-input-text__icon--suffix", rule: "suffix" as const },
  { name: ".gem-input-text__message", rule: "message" as const },
  ...inputSearchSizes.map((value) => ({ name: `.gem-input-text--${value}`, rule: "size" as const, value })),
  ...inputSearchBorders.map((value) => ({
    name: `.gem-input-text--border-${value}`,
    rule: "border" as const,
    value,
  })),
  { name: ".gem-input-search--has-clear", rule: "hasClear" as const },
  { name: ".gem-input-search--suffix-and-clear", rule: "suffixAndClear" as const },
  { name: ".gem-input-text--label-outline", rule: "labelOutline" as const },
  { name: ".gem-input-text--invalid", rule: "invalid" as const },
  { name: ".gem-input-text--disabled", rule: "disabled" as const },
];

export const inputSearchCssVariables = ["--gem-input-prefix-pad", "--gem-input-suffix-pad"] as const;

export const inputSearchTokens = [
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
