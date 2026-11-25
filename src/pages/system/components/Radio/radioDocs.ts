import type { RadioSize, RadioTone } from "@gem-org/gem-system";

export const radioTones: RadioTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export const radioSizes: RadioSize[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const radioProps = [
  { name: "value", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "name", type: "string", defaultValue: "—" },
  { name: "size", type: union(radioSizes), defaultValue: '"md"' },
  { name: "tone", type: union(radioTones), defaultValue: '"primary"' },
  { name: "checked", type: "boolean", defaultValue: "—" },
  { name: "defaultChecked", type: "boolean", defaultValue: "—" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "id", type: "string", defaultValue: "useId()" },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
] as const;

export const radioCssClasses = [
  { name: ".gem-radio", rule: "root" as const },
  { name: ".gem-radio__label", rule: "label" as const },
  { name: ".gem-radio__control", rule: "control" as const },
  { name: ".gem-radio__input", rule: "input" as const },
  { name: ".gem-radio__circle", rule: "circle" as const },
  { name: ".gem-radio__dot", rule: "dot" as const },
  { name: ".gem-radio__label-text", rule: "labelText" as const },
  { name: ".gem-radio__message", rule: "message" as const },
  ...radioSizes.map((value) => ({ name: `.gem-radio--${value}`, rule: "size" as const, value })),
  ...radioTones.map((value) => ({
    name: `.gem-radio--tone-${value}`,
    rule: "tone" as const,
    value,
  })),
  { name: ".gem-radio--invalid", rule: "invalid" as const },
  { name: ".gem-radio--disabled", rule: "disabled" as const },
];

export const radioCssVariables = [
  "--gem-radio-tone",
  "--gem-radio-tone-hover",
  "--gem-radio-tone-active",
  "--gem-radio-tone-focus",
  "--gem-radio-on",
] as const;
