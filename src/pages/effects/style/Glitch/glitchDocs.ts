export const glitchContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const glitchAppearanceProps = [
  { name: "variant", type: '"cyber" | "rgb" | "slice" | "noise"', defaultValue: '"cyber"' },
  { name: "split", type: "number", defaultValue: "—" },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "colorAlt", type: "string", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const glitchTimingProps = [
  { name: "duration", type: "number", defaultValue: "2200" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const glitchStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const glitchEventProps = [
  { name: "onGlitch", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outGlitch", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const glitchStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "GlitchClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const glitchCssClasses = [
  { id: "root", name: ".gemfx-glitch" },
  { id: "variant", name: ".gemfx-glitch--{cyber|rgb|slice|noise}" },
  { id: "live", name: ".gemfx-glitch--live" },
  { id: "filter", name: ".gemfx-glitch--filter" },
  { id: "trigger", name: ".gemfx-glitch--{hover|click}" },
  { id: "on", name: ".gemfx-glitch--on" },
  { id: "paused", name: ".gemfx-glitch--paused" },
  { id: "inactive", name: ".gemfx-glitch--inactive" },
  { id: "disabled", name: ".gemfx-glitch--disabled" },
  { id: "defs", name: ".gemfx-glitch__defs" },
  { id: "surface", name: ".gemfx-glitch__surface" },
  { id: "layer", name: ".gemfx-glitch__layer" },
  { id: "slice", name: ".gemfx-glitch__slice, .gemfx-glitch__slice--{a|b}" },
  { id: "scan", name: ".gemfx-glitch__scan" },
  { id: "noise", name: ".gemfx-glitch__noise" },
] as const;

export const glitchCssVariables = [
  { id: "red", name: "--gemfx-glitch-red" },
  { id: "cyan", name: "--gemfx-glitch-cyan" },
  { id: "duration", name: "--gemfx-glitch-duration" },
  { id: "delay", name: "--gemfx-glitch-delay" },
  { id: "intensity", name: "--gemfx-glitch-intensity" },
  { id: "split", name: "--gemfx-glitch-split" },
  { id: "filter", name: "--gemfx-glitch-filter" },
] as const;

export const glitchTokens = [
  { id: "primary", name: "--gem-palette-primary-400" },
  { id: "secondary", name: "--gem-palette-secondary-400" },
] as const;

export const glitchA11yIds = [
  "photosensitivity",
  "reducedMotion",
  "ignoreReducedMotion",
  "decorative",
  "keyboard",
  "performance",
] as const;
