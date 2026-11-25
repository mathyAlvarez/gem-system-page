export const scrambleTextContentProps = [
  { name: "text", type: "string", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const scrambleTextAppearanceProps = [
  { name: "variant", type: '"decode" | "loop"', defaultValue: '"decode"' },
  {
    name: "charset",
    type: "string",
    defaultValue: '"A–Z a–z 0–9"',
  },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const scrambleTextTimingProps = [
  { name: "duration", type: "number", defaultValue: "900" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "hold", type: "number", defaultValue: "1200" },
] as const;

export const scrambleTextStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const scrambleTextEventProps = [
  { name: "onScrambleText", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outScrambleText", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const scrambleTextStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ScrambleTextClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const scrambleTextCssClasses = [
  { id: "root", name: ".gemfx-scramble-text" },
  { id: "variant", name: ".gemfx-scramble-text--{decode|loop}" },
  { id: "trigger", name: ".gemfx-scramble-text--{hover|click}" },
  { id: "on", name: ".gemfx-scramble-text--on" },
  { id: "paused", name: ".gemfx-scramble-text--paused" },
  { id: "inactive", name: ".gemfx-scramble-text--inactive" },
  { id: "disabled", name: ".gemfx-scramble-text--disabled" },
  { id: "surface", name: ".gemfx-scramble-text__surface" },
  { id: "glyphs", name: ".gemfx-scramble-text__glyphs" },
  { id: "sr", name: ".gemfx-scramble-text__sr" },
] as const;

export const scrambleTextCssVariables = [
  { id: "duration", name: "--gemfx-scramble-text-duration" },
  { id: "delay", name: "--gemfx-scramble-text-delay" },
] as const;

export const scrambleTextTokens = [{ id: "fontMono", name: "--gem-font-mono" }] as const;

export const scrambleTextA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "name",
  "width",
  "keyboard",
] as const;
