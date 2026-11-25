import type {
  TextareaBorder,
  TextareaLabelPlacement,
  TextareaResize,
  TextareaSize,
} from "@gem-org/gem-system";

export const textareaSizes: TextareaSize[] = ["sm", "md", "lg"];

export const textareaBorders: TextareaBorder[] = [
  "default",
  "outlined",
  "borderless",
  "primary",
  "success",
  "warning",
  "error",
  "info",
];

export const textareaResizes: TextareaResize[] = ["none", "vertical", "horizontal", "both", "auto"];

export const textareaLabelPlacements: TextareaLabelPlacement[] = ["above", "outline"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const textareaProps = [
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "placeholder", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: union(textareaLabelPlacements), defaultValue: '"above"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "size", type: union(textareaSizes), defaultValue: '"md"' },
  { name: "border", type: "TextareaBorder", defaultValue: '"default"' },
  { name: "resize", type: union(textareaResizes), defaultValue: '"vertical"' },
  { name: "minRows", type: "number", defaultValue: "3" },
  { name: "maxRows", type: "number", defaultValue: "—" },
  { name: "showCount", type: "boolean", defaultValue: "false" },
  { name: "maxLength", type: "number", defaultValue: "—" },
  { name: "validRegex", type: "RegExp | string", defaultValue: "—" },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  {
    name: "onChange",
    type: "(event: ChangeEvent<HTMLTextAreaElement>) => void",
    defaultValue: "—",
  },
  { name: "onValidate", type: "(isValid: boolean, value: string) => void", defaultValue: "—" },
  { name: "clearable", type: "boolean", defaultValue: "false" },
  { name: "clearLabel", type: "string", defaultValue: '"Clear"' },
  { name: "onClear", type: "() => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

const messageTones = ["error", "primary", "success", "warning", "info"] as const;

export const textareaCssClasses = [
  { name: ".gem-textarea", rule: "root" as const },
  { name: ".gem-field-clear", rule: "clear" as const },
  { name: ".gem-textarea__label", rule: "label" as const },
  { name: ".gem-textarea__required", rule: "required" as const },
  { name: ".gem-textarea__field", rule: "field" as const },
  { name: ".gem-textarea__control", rule: "control" as const },
  { name: ".gem-textarea__footer", rule: "footer" as const },
  { name: ".gem-textarea__messages", rule: "messages" as const },
  { name: ".gem-textarea__message", rule: "message" as const },
  ...messageTones.map((value) => ({
    name: `.gem-textarea__message--${value}`,
    rule: "messageTone" as const,
    value,
  })),
  { name: ".gem-textarea__count", rule: "count" as const },
  { name: ".gem-textarea__count--limit", rule: "countLimit" as const },
  ...textareaSizes.map((value) => ({
    name: `.gem-textarea--${value}`,
    rule: "size" as const,
    value,
  })),
  ...textareaBorders.map((value) => ({
    name: `.gem-textarea--border-${value}`,
    rule: "border" as const,
    value,
  })),
  ...textareaResizes.map((value) => ({
    name: `.gem-textarea--resize-${value}`,
    rule: "resize" as const,
    value,
  })),
  { name: ".gem-textarea--label-outline", rule: "labelOutline" as const },
  { name: ".gem-textarea--has-info", rule: "hasInfo" as const },
  { name: ".gem-textarea--has-count", rule: "hasCount" as const },
  { name: ".gem-textarea--invalid", rule: "invalid" as const },
  { name: ".gem-textarea--disabled", rule: "disabled" as const },
];

export const textareaTokens = [
  "--gem-color-border",
  "--gem-color-accent",
  "--gem-shadow-focus",
  "--gem-shadow-xs",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-neutral-400",
  "--gem-color-error-600",
  "--gem-color-error-700",
  "--gem-radius-md",
  "--gem-font-sans",
] as const;
