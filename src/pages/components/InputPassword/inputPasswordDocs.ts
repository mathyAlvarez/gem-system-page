import type { InputPasswordBorder, InputPasswordSize } from "@gem-org/gem-system";

export const inputPasswordSizes: InputPasswordSize[] = ["sm", "md", "lg"];

export const inputPasswordBorders: InputPasswordBorder[] = [
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

export const inputPasswordProps = [
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "showToggle", type: "boolean", defaultValue: "true" },
  { name: "isVisible", type: "boolean", defaultValue: "—" },
  { name: "defaultVisible", type: "boolean", defaultValue: "false" },
  { name: "visibleIcon", type: "ReactNode", defaultValue: "<Eye />" },
  { name: "hiddenIcon", type: "ReactNode", defaultValue: "<EyeOff />" },
  { name: "maskCharacter", type: "string", defaultValue: "—" },
  { name: "showPasswordLabel", type: "string", defaultValue: '"Show password"' },
  { name: "hidePasswordLabel", type: "string", defaultValue: '"Hide password"' },
  { name: "autoComplete", type: "string", defaultValue: '"current-password"' },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"above" | "outline"', defaultValue: '"above"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "prefixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "suffixIcon", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: union(inputPasswordSizes), defaultValue: '"md"' },
  { name: "border", type: "InputPasswordBorder", defaultValue: '"default"' },
  { name: "validRegex", type: "RegExp | string", defaultValue: "—" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
  { name: "onVisibilityChange", type: "(isVisible: boolean) => void", defaultValue: "—" },
  { name: "onValidate", type: "(isValid: boolean, value: string) => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

export const inputPasswordCssClasses = [
  { name: ".gem-input-password", rule: "root" as const },
  { name: ".gem-input-password__toggle", rule: "toggle" as const },
  { name: ".gem-input-password__suffix", rule: "suffix" as const },
  { name: ".gem-input-text__label", rule: "label" as const },
  { name: ".gem-input-text__field", rule: "field" as const },
  { name: ".gem-input-text__control", rule: "control" as const },
  { name: ".gem-input-text__icon--prefix", rule: "prefix" as const },
  { name: ".gem-input-text__message", rule: "message" as const },
  ...inputPasswordSizes.map((value) => ({ name: `.gem-input-text--${value}`, rule: "size" as const, value })),
  ...inputPasswordBorders.map((value) => ({
    name: `.gem-input-text--border-${value}`,
    rule: "border" as const,
    value,
  })),
  { name: ".gem-input-password--has-toggle", rule: "hasToggle" as const },
  { name: ".gem-input-password--has-suffix-and-toggle", rule: "hasSuffixAndToggle" as const },
  { name: ".gem-input-password--native-mask", rule: "nativeMask" as const },
  { name: ".gem-input-password--custom-mask", rule: "customMask" as const },
  { name: ".gem-input-text--label-outline", rule: "labelOutline" as const },
  { name: ".gem-input-text--invalid", rule: "invalid" as const },
  { name: ".gem-input-text--disabled", rule: "disabled" as const },
];

export const inputPasswordTokens = [
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
