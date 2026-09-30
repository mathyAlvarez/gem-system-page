export const copyProps = [
  { name: "value", type: "string | (() => string)", defaultValue: "—" },
  { name: "children", type: "ReactNode | ((props: CopyToClipboardRenderProps) => ReactNode)", defaultValue: "—" },
  { name: "timeout", type: "number", defaultValue: "2000" },
  { name: "variant", type: "ButtonVariant", defaultValue: '"transparent"' },
  { name: "size", type: '"sm" | "md" | "lg" | "xl"', defaultValue: '"md"' },
  { name: "iconOnly", type: "boolean", defaultValue: "auto" },
  { name: "rounded", type: "boolean", defaultValue: "false" },
  { name: "label", type: "ReactNode", defaultValue: '"Copy"' },
  { name: "copiedLabel", type: "ReactNode", defaultValue: '"Copied"' },
  { name: "copyAriaLabel", type: "string", defaultValue: '"Copy to clipboard"' },
  { name: "copiedAriaLabel", type: "string", defaultValue: '"Copied to clipboard"' },
  { name: "errorAriaLabel", type: "string", defaultValue: '"Unable to copy"' },
  { name: "tooltip", type: "boolean", defaultValue: "true" },
  { name: "tooltipPlacement", type: '"top" | "bottom" | "left" | "right"', defaultValue: '"top"' },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "buttonProps", type: "CopyToClipboardButtonProps", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "CopyToClipboardClassNames", defaultValue: "—" },
  { name: "onCopied", type: "(value: string) => void", defaultValue: "—" },
  { name: "onError", type: "(error: Error) => void", defaultValue: "—" },
] as const;

export const copyRenderProps = [
  { name: "copied", type: "boolean", defaultValue: "—" },
  { name: "error", type: "Error | null", defaultValue: "—" },
  { name: "copy", type: "() => void", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "—" },
] as const;

export const copyCssClasses = [
  { name: ".gem-copy-to-clipboard", rule: "root" },
  { name: ".gem-copy-to-clipboard--copied", rule: "copied" },
  { name: ".gem-copy-to-clipboard--error", rule: "error" },
  { name: ".gem-copy-to-clipboard__button", rule: "button" },
  { name: ".gem-copy-to-clipboard__button--copied", rule: "buttonCopied" },
  { name: ".gem-copy-to-clipboard__status", rule: "status" },
] as const;

export const copyTokens = ["--gem-color-success-solid", "--gem-color-error-solid"] as const;
