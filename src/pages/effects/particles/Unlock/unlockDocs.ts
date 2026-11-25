export const unlockContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "cover", type: 'ReactNode | ((slot: "a" | "b") => ReactNode)', defaultValue: "—" },
  { name: "coverSrc", type: "string", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const unlockAppearanceProps = [
  {
    name: "direction",
    type: '"horizontal" | "vertical" | "left" | "right" | "up" | "down"',
    defaultValue: '"horizontal"',
  },
  { name: "variant", type: '"unlock" | "lock"', defaultValue: '"unlock"' },
  { name: "color", type: "string", defaultValue: "—" },
  { name: "gap", type: "number", defaultValue: "0" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const unlockTimingProps = [
  { name: "duration", type: "number", defaultValue: "560" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "stagger", type: "number", defaultValue: "40" },
] as const;

export const unlockStateProps = [
  { name: "trigger", type: '"click" | "hover" | "always"', defaultValue: '"click"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "false" },
] as const;

export const unlockEventProps = [
  { name: "onUnlock", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outUnlock", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const unlockStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "UnlockClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const unlockCssClasses = [
  { id: "root", name: ".gemfx-unlock" },
  { id: "direction", name: ".gemfx-unlock--{horizontal|vertical|left|right|up|down}" },
  { id: "variant", name: ".gemfx-unlock--{unlock|lock}" },
  { id: "trigger", name: ".gemfx-unlock--{click|hover|always}" },
  { id: "open", name: ".gemfx-unlock--open" },
  { id: "blocking", name: ".gemfx-unlock--blocking" },
  { id: "cover", name: ".gemfx-unlock--cover, --cover-src" },
  { id: "paused", name: ".gemfx-unlock--paused" },
  { id: "inactive", name: ".gemfx-unlock--inactive" },
  { id: "disabled", name: ".gemfx-unlock--disabled" },
  { id: "surface", name: ".gemfx-unlock__surface" },
  { id: "layer", name: ".gemfx-unlock__layer" },
  { id: "panel", name: ".gemfx-unlock__panel, __panel--a, __panel--b" },
  { id: "media", name: ".gemfx-unlock__media" },
] as const;

export const unlockCssVariables = [
  { id: "color", name: "--gemfx-unlock-color" },
  { id: "timing", name: "--gemfx-unlock-duration, -delay, -stagger" },
  { id: "gap", name: "--gemfx-unlock-gap" },
  { id: "intensity", name: "--gemfx-unlock-intensity" },
] as const;

export const unlockTokens = [
  { id: "color", name: "--gem-palette-neutral-950, primary-800" },
  { id: "easing", name: "--gemfx-easing-emphasized" },
  { id: "intensity", name: "--gemfx-intensity-md" },
] as const;

export const unlockA11yIds = [
  "hidden",
  "keyboard",
  "clickThrough",
  "reducedMotion",
  "ignoreReducedMotion",
  "touch",
] as const;
