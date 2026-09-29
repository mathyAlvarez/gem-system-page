import type { CheckboxSize, CheckboxTone } from "@gem-org/gem-system";

export const checkboxTones: CheckboxTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export const checkboxSizes: CheckboxSize[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const checkboxProps = [
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: union(checkboxSizes), defaultValue: '"md"' },
  { name: "tone", type: union(checkboxTones), defaultValue: '"primary"' },
  { name: "rounded", type: "boolean", defaultValue: "false" },
  { name: "indeterminate", type: "boolean", defaultValue: "false" },
  { name: "checked", type: "boolean", defaultValue: "—" },
  { name: "defaultChecked", type: "boolean", defaultValue: "—" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
] as const;

export type CheckboxPropName = (typeof checkboxProps)[number]["name"];

export const checkboxCssClasses = [
  { name: ".gem-checkbox", rule: "root" as const },
  { name: ".gem-checkbox__label", rule: "label" as const },
  { name: ".gem-checkbox__control", rule: "control" as const },
  { name: ".gem-checkbox__input", rule: "input" as const },
  { name: ".gem-checkbox__box", rule: "box" as const },
  { name: ".gem-checkbox__icon--check", rule: "iconCheck" as const },
  { name: ".gem-checkbox__icon--minus", rule: "iconMinus" as const },
  { name: ".gem-checkbox__label-text", rule: "labelText" as const },
  { name: ".gem-checkbox__required", rule: "required" as const },
  { name: ".gem-checkbox__message", rule: "message" as const },
  { name: ".gem-checkbox__message--error", rule: "messageError" as const },
  ...checkboxSizes.map((value) => ({ name: `.gem-checkbox--${value}`, rule: "size" as const, value })),
  ...checkboxTones.map((value) => ({ name: `.gem-checkbox--tone-${value}`, rule: "tone" as const, value })),
  { name: ".gem-checkbox--rounded", rule: "rounded" as const },
  { name: ".gem-checkbox--indeterminate", rule: "indeterminate" as const },
  { name: ".gem-checkbox--invalid", rule: "invalid" as const },
  { name: ".gem-checkbox--disabled", rule: "disabled" as const },
];

export const checkboxCssVariables = [
  "--gem-checkbox-tone",
  "--gem-checkbox-tone-hover",
  "--gem-checkbox-tone-active",
  "--gem-checkbox-tone-focus",
  "--gem-checkbox-on",
] as const;
