import type { OtpInputBorder, OtpInputSize } from "@gem-org/gem-system";

export const otpInputSizes: OtpInputSize[] = ["sm", "md", "lg"];

export const otpInputBorders: OtpInputBorder[] = [
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

export const otpInputProps = [
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: '""' },
  { name: "length", type: "number", defaultValue: "6" },
  { name: "type", type: '"numeric" | "alphanumeric"', defaultValue: '"numeric"' },
  { name: "uppercase", type: "boolean", defaultValue: "true" },
  { name: "mask", type: "boolean", defaultValue: "false" },
  { name: "maskIcon", type: "ReactNode", defaultValue: "—" },
  { name: "separator", type: "ReactNode", defaultValue: "—" },
  { name: "placeholder", type: "string", defaultValue: "—" },
  { name: "name", type: "string", defaultValue: "—" },
  { name: "id", type: "string", defaultValue: "useId()" },
  { name: "autoFocus", type: "boolean", defaultValue: "false" },
  { name: "autoComplete", type: "string", defaultValue: '"one-time-code"' },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"above" | "outline"', defaultValue: '"above"' },
  { name: "helperText", type: "ReactNode", defaultValue: "—" },
  { name: "errorMessage", type: "ReactNode", defaultValue: "—" },
  { name: "infoText", type: "ReactNode", defaultValue: "—" },
  { name: "infoLabel", type: "string", defaultValue: "—" },
  { name: "size", type: union(otpInputSizes), defaultValue: '"md"' },
  { name: "border", type: "OtpInputBorder", defaultValue: '"default"' },
  { name: "isInvalid", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "isRequired", type: "boolean", defaultValue: "false" },
  { name: "aria-label", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "onChange", type: "(value: string) => void", defaultValue: "—" },
  { name: "onComplete", type: "(value: string) => void", defaultValue: "—" },
  { name: "onFocus", type: "FocusEventHandler<HTMLDivElement>", defaultValue: "—" },
  { name: "onBlur", type: "FocusEventHandler<HTMLDivElement>", defaultValue: "—" },
  { name: "clearable", type: "boolean", defaultValue: "false" },
  { name: "clearLabel", type: "string", defaultValue: '"Clear"' },
  { name: "onClear", type: "() => void", defaultValue: "—" },
  { name: "onInfoClick", type: "MouseEventHandler<HTMLButtonElement>", defaultValue: "—" },
] as const;

const messageTones = ["error", "primary", "success", "warning", "info"] as const;

export const otpInputCssClasses = [
  { name: ".gem-otp-input", rule: "root" as const },
  { name: ".gem-field-clear", rule: "clear" as const },
  { name: ".gem-otp-input__label", rule: "label" as const },
  { name: ".gem-otp-input__required", rule: "required" as const },
  { name: ".gem-otp-input__field", rule: "field" as const },
  { name: ".gem-otp-input__slots", rule: "slots" as const },
  { name: ".gem-otp-input__slot", rule: "slot" as const },
  { name: ".gem-otp-input__control", rule: "control" as const },
  { name: ".gem-otp-input__control--secret", rule: "secret" as const },
  { name: ".gem-otp-input__mask", rule: "mask" as const },
  { name: ".gem-otp-input__mask--disc", rule: "disc" as const },
  { name: ".gem-otp-input__separator", rule: "separator" as const },
  { name: ".gem-otp-input__message", rule: "message" as const },
  ...messageTones.map((value) => ({
    name: `.gem-otp-input__message--${value}`,
    rule: "messageTone" as const,
    value,
  })),
  ...otpInputSizes.map((value) => ({
    name: `.gem-otp-input--${value}`,
    rule: "size" as const,
    value,
  })),
  ...otpInputBorders.map((value) => ({
    name: `.gem-otp-input--border-${value}`,
    rule: "border" as const,
    value,
  })),
  { name: ".gem-otp-input--length-{n}", rule: "length" as const },
  { name: ".gem-otp-input--label-outline", rule: "labelOutline" as const },
  { name: ".gem-otp-input--has-info", rule: "hasInfo" as const },
  { name: ".gem-otp-input--invalid", rule: "invalid" as const },
  { name: ".gem-otp-input--disabled", rule: "disabled" as const },
  { name: ".gem-otp-input--masked", rule: "masked" as const },
  { name: ".gem-otp-input--uppercase", rule: "uppercase" as const },
];

export const otpInputTokens = [
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
  "--gem-space-2",
  "--gem-font-sans",
] as const;

export const otpInputUtils = [
  { name: "DEFAULT_OTP_LENGTH", type: "6" },
  { name: "resolveOtpLength", type: "(length: number | undefined) => number" },
  {
    name: "sanitizeOtpValue",
    type: "(raw: string, type: OtpInputType, uppercase: boolean) => string",
  },
  { name: "clampOtpLength", type: "(length: number | undefined) => number" },
] as const;
