import type { SwitchLabelPlacement, SwitchSize, SwitchTone } from "@gem-org/gem-system";

export const switchTones: SwitchTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export const switchSizes: SwitchSize[] = ["sm", "md", "lg"];

export const switchLabelPlacements: SwitchLabelPlacement[] = ["end", "start"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const switchProps = [
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: union(switchLabelPlacements), defaultValue: '"end"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: union(switchSizes), defaultValue: '"md"' },
  { name: "tone", type: union(switchTones), defaultValue: '"primary"' },
  { name: "checked", type: "boolean", defaultValue: "—" },
  { name: "defaultChecked", type: "boolean", defaultValue: "—" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "id", type: "string", defaultValue: "useId()" },
  { name: "name", type: "string", defaultValue: "—" },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(event: ChangeEvent<HTMLInputElement>) => void", defaultValue: "—" },
  {
    name: "onKeyDown",
    type: "(event: KeyboardEvent<HTMLInputElement>) => void",
    defaultValue: "—",
  },
] as const;

export const switchCssClasses = [
  { name: ".gem-switch", rule: "root" as const },
  { name: ".gem-switch__label", rule: "label" as const },
  { name: ".gem-switch__control", rule: "control" as const },
  { name: ".gem-switch__input", rule: "input" as const },
  { name: ".gem-switch__track", rule: "track" as const },
  { name: ".gem-switch__thumb", rule: "thumb" as const },
  { name: ".gem-switch__label-text", rule: "labelText" as const },
  { name: ".gem-switch__required", rule: "required" as const },
  { name: ".gem-switch__message", rule: "message" as const },
  { name: ".gem-switch__message--error", rule: "messageError" as const },
  ...switchSizes.map((value) => ({ name: `.gem-switch--${value}`, rule: "size" as const, value })),
  ...switchTones.map((value) => ({
    name: `.gem-switch--tone-${value}`,
    rule: "tone" as const,
    value,
  })),
  ...switchLabelPlacements.map((value) => ({
    name: `.gem-switch--label-${value}`,
    rule: "placement" as const,
    value,
  })),
  { name: ".gem-switch--invalid", rule: "invalid" as const },
  { name: ".gem-switch--disabled", rule: "disabled" as const },
];

export const switchCssVariables = [
  "--gem-switch-tone",
  "--gem-switch-tone-hover",
  "--gem-switch-tone-active",
  "--gem-switch-tone-focus",
  "--gem-switch-thumb",
  "--gem-switch-thumb-on",
  "--gem-switch-track-ring",
  "--gem-switch-track-w",
  "--gem-switch-track-h",
  "--gem-switch-pad",
] as const;
