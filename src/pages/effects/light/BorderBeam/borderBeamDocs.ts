export const beamContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const beamAppearanceProps = [
  {
    name: "variant",
    type: '"orbit" | "dual" | "spark" | "trace" | "track"',
    defaultValue: '"orbit"',
  },
  { name: "color", type: "string", defaultValue: "var(--gem-palette-primary-400)" },
  { name: "colorAlt", type: "string", defaultValue: "var(--gem-palette-secondary-400)" },
  { name: "thickness", type: "number | string", defaultValue: "2" },
  { name: "length", type: "number", defaultValue: "18 | 14 | 8 | 38 | 16" },
  { name: "offset", type: "number", defaultValue: "0" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const beamTimingProps = [
  { name: "duration", type: "number", defaultValue: "3600" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "reverse", type: "boolean", defaultValue: "false" },
] as const;

export const beamStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const beamEventProps = [
  { name: "onBorderBeam", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outBorderBeam", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const beamStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "BorderBeamClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const beamCssClasses = [
  { id: "root", name: ".gemfx-border-beam" },
  { id: "variant", name: ".gemfx-border-beam--{orbit|dual|spark|trace|track}" },
  { id: "reverse", name: ".gemfx-border-beam--reverse" },
  { id: "trigger", name: ".gemfx-border-beam--{hover|click}" },
  { id: "on", name: ".gemfx-border-beam--on" },
  { id: "paused", name: ".gemfx-border-beam--paused" },
  { id: "inactive", name: ".gemfx-border-beam--inactive" },
  { id: "disabled", name: ".gemfx-border-beam--disabled" },
  { id: "layer", name: ".gemfx-border-beam__layer" },
  { id: "track", name: ".gemfx-border-beam__track" },
  { id: "ring", name: ".gemfx-border-beam__ring" },
  { id: "spin", name: ".gemfx-border-beam__spin" },
  { id: "spinAlt", name: ".gemfx-border-beam__spin--alt" },
  { id: "surface", name: ".gemfx-border-beam__surface" },
] as const;

export const beamCssVariables = [
  { id: "color", name: "--gemfx-border-beam-color" },
  { id: "colorAlt", name: "--gemfx-border-beam-color-alt" },
  { id: "duration", name: "--gemfx-border-beam-duration" },
  { id: "delay", name: "--gemfx-border-beam-delay" },
  { id: "thickness", name: "--gemfx-border-beam-thickness" },
  { id: "span", name: "--gemfx-border-beam-span" },
  { id: "offset", name: "--gemfx-border-beam-offset" },
  { id: "intensity", name: "--gemfx-border-beam-intensity" },
] as const;

export const beamTokens = [
  { id: "intensity", name: "--gemfx-intensity-md" },
  { id: "palette", name: "--gem-palette-{primary|secondary}-400" },
  { id: "spark", name: "--gem-palette-neutral-0" },
] as const;

export const beamA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "focus",
  "click",
  "meaning",
  "minify",
] as const;
