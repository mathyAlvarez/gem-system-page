export const spotlightContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const spotlightAppearanceProps = [
  { name: "variant", type: '"reveal" | "glow" | "ring"', defaultValue: '"reveal"' },
  { name: "color", type: "string", defaultValue: "var(--gem-palette-primary-200)" },
  { name: "veilColor", type: "string", defaultValue: "var(--gem-palette-neutral-950)" },
  { name: "size", type: "number | string", defaultValue: "120 | 180 | 280" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const spotlightTimingProps = [
  { name: "duration", type: "number", defaultValue: "220" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const spotlightStateProps = [
  { name: "trigger", type: '"hover" | "always" | "press"', defaultValue: '"hover"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "true" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const spotlightEventProps = [
  { name: "onSpotlight", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outSpotlight", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const spotlightStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SpotlightClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const spotlightHookResult = [
  { name: "ref", type: "RefCallback<HTMLElement>" },
  { name: "style", type: "CSSProperties" },
  {
    name: "pointerProps",
    type: "{ onPointerEnter, onPointerLeave, onPointerMove, onPointerDown, onPointerUp, onPointerCancel }",
  },
  { name: "motionClassName", type: "string | undefined" },
  { name: "pose", type: "{ x: number; y: number; strength: number }" },
  { name: "variant", type: "SpotlightVariant" },
  { name: "isTracking", type: "boolean" },
  { name: "isHover", type: "boolean" },
  { name: "isAlways", type: "boolean" },
  { name: "isPress", type: "boolean" },
  { name: "spotlightOff", type: "boolean" },
  { name: "isPaused", type: "boolean" },
  { name: "isDisabled", type: "boolean" },
] as const;

export const spotlightCssClasses = [
  { id: "root", name: ".gemfx-spotlight" },
  { id: "variant", name: ".gemfx-spotlight--{reveal|glow|ring}" },
  { id: "trigger", name: ".gemfx-spotlight--{hover|always|press}" },
  { id: "tracking", name: ".gemfx-spotlight--tracking" },
  { id: "paused", name: ".gemfx-spotlight--paused" },
  { id: "inactive", name: ".gemfx-spotlight--inactive" },
  { id: "disabled", name: ".gemfx-spotlight--disabled" },
  { id: "surface", name: ".gemfx-spotlight__surface" },
  { id: "layer", name: ".gemfx-spotlight__layer" },
  { id: "beam", name: ".gemfx-spotlight__beam" },
] as const;

export const spotlightCssVariables = [
  { id: "color", name: "--gemfx-spotlight-color" },
  { id: "veil", name: "--gemfx-spotlight-veil" },
  { id: "size", name: "--gemfx-spotlight-size" },
  { id: "duration", name: "--gemfx-spotlight-duration" },
  { id: "delay", name: "--gemfx-spotlight-delay" },
  { id: "position", name: "--gemfx-spotlight-{x|y}" },
  { id: "strength", name: "--gemfx-spotlight-strength" },
] as const;

export const spotlightTokens = [
  { id: "easing", name: "--gemfx-easing-standard" },
  { id: "palette", name: "--gem-palette-primary-200" },
  { id: "veil", name: "--gem-palette-neutral-950" },
] as const;

export const spotlightA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "pointerOnly",
  "touch",
  "press",
  "contrast",
] as const;
