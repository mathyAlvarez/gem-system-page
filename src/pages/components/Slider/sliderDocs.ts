import type { SliderSize, SliderTone } from "@gem-org/gem-system";

export const sliderTones: SliderTone[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
];

export const sliderSizes: SliderSize[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const sliderProps = [
  { name: "min", type: "number", defaultValue: "0" },
  { name: "max", type: "number", defaultValue: "100" },
  { name: "step", type: "number", defaultValue: "1" },
  { name: "value", type: "number | [number, number]", defaultValue: "—" },
  { name: "defaultValue", type: "number | [number, number]", defaultValue: "min | [min, max]" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "size", type: union(sliderSizes), defaultValue: '"md"' },
  { name: "tone", type: union(sliderTones), defaultValue: '"primary"' },
  { name: "showValue", type: "boolean", defaultValue: "true" },
  { name: "prefix", type: "string", defaultValue: "—" },
  { name: "suffix", type: "string", defaultValue: "—" },
  { name: "formatValue", type: "(value: number) => string", defaultValue: "—" },
  { name: "minAriaLabel", type: "string", defaultValue: '"Minimum"' },
  { name: "maxAriaLabel", type: "string", defaultValue: '"Maximum"' },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "name", type: "string", defaultValue: "—" },
  { name: "maxName", type: "string", defaultValue: "`${name}-max`" },
  { name: "id", type: "string", defaultValue: "useId()" },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(value: SliderValue) => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

export const sliderCssClasses = [
  { name: ".gem-slider", rule: "root" as const },
  { name: ".gem-slider__header", rule: "header" as const },
  { name: ".gem-slider__control", rule: "control" as const },
  { name: ".gem-slider__ticks", rule: "ticks" as const },
  { name: ".gem-slider__tick-value", rule: "tickValue" as const },
  { name: ".gem-slider__rail", rule: "rail" as const },
  { name: ".gem-slider__track", rule: "track" as const },
  { name: ".gem-slider__fill", rule: "fill" as const },
  { name: ".gem-slider__thumb", rule: "thumb" as const },
  { name: ".gem-slider__thumb--min", rule: "thumbMin" as const },
  { name: ".gem-slider__thumb--max", rule: "thumbMax" as const },
  { name: ".gem-slider__message", rule: "message" as const },
  { name: ".gem-slider__message--error", rule: "messageError" as const },
  ...sliderSizes.map((value) => ({ name: `.gem-slider--${value}`, rule: "size" as const, value })),
  ...sliderTones.map((value) => ({ name: `.gem-slider--tone-${value}`, rule: "tone" as const, value })),
  { name: ".gem-slider--single", rule: "single" as const },
  { name: ".gem-slider--range", rule: "range" as const },
  { name: ".gem-slider--invalid", rule: "invalid" as const },
  { name: ".gem-slider--disabled", rule: "disabled" as const },
];

export const sliderCssVariables = [
  "--gem-slider-tone",
  "--gem-slider-tone-hover",
  "--gem-slider-tone-active",
  "--gem-slider-tone-focus",
  "--gem-slider-thumb",
  "--gem-slider-track-h",
  "--gem-slider-thumb-size",
] as const;
