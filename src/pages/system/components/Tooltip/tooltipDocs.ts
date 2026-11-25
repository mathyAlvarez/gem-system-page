import type { TooltipPlacement } from "@gem-org/gem-system";

export const tooltipPlacements: TooltipPlacement[] = ["top", "bottom", "left", "right"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const tooltipProps = [
  { name: "content", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactElement", defaultValue: "—" },
  { name: "placement", type: union(tooltipPlacements), defaultValue: '"top"' },
  { name: "delay", type: "number", defaultValue: "200" },
  { name: "closeDelay", type: "number", defaultValue: "0" },
  { name: "offset", type: "number", defaultValue: "8" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "open", type: "boolean", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "wrapperClassName", type: "string", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
] as const;

export const tooltipCssClasses = [
  { name: ".gem-tooltip-trigger", rule: "trigger" as const },
  { name: ".gem-tooltip", rule: "root" as const },
  { name: ".gem-tooltip__content", rule: "content" as const },
  { name: ".gem-tooltip__arrow", rule: "arrow" as const },
  ...tooltipPlacements.map((value) => ({
    name: `.gem-tooltip--${value}`,
    rule: "placement" as const,
    value,
  })),
  { name: ".gem-tooltip--ready", rule: "ready" as const },
];

export const tooltipTokens = [
  "--gem-palette-neutral-900",
  "--gem-palette-neutral-50",
  "--gem-radius-sm",
  "--gem-shadow-md",
  "--gem-font-sans",
  "--gem-z-tooltip",
] as const;
