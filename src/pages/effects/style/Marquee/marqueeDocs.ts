export const marqueeContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const marqueeAppearanceProps = [
  { name: "variant", type: '"left" | "right" | "up" | "down"', defaultValue: '"left"' },
  { name: "gap", type: "number | string", defaultValue: "—" },
  { name: "size", type: "number | string", defaultValue: "—" },
  { name: "fade", type: "boolean", defaultValue: "true" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
] as const;

export const marqueeTimingProps = [
  { name: "duration", type: "number", defaultValue: "18000" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const marqueeStateProps = [
  { name: "trigger", type: '"always" | "hover" | "click"', defaultValue: '"always"' },
  { name: "pauseOnHover", type: "boolean", defaultValue: "true" },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const marqueeEventProps = [
  { name: "onMarquee", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outMarquee", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const marqueeStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "MarqueeClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const marqueeCssClasses = [
  { id: "root", name: ".gemfx-marquee" },
  { id: "variant", name: ".gemfx-marquee--{left|right|up|down}" },
  { id: "fade", name: ".gemfx-marquee--fade" },
  { id: "flat", name: ".gemfx-marquee--flat" },
  { id: "unmeasured", name: ".gemfx-marquee--unmeasured" },
  { id: "trigger", name: ".gemfx-marquee--{always|hover|click}" },
  { id: "on", name: ".gemfx-marquee--on" },
  { id: "hoverPaused", name: ".gemfx-marquee--hover-paused" },
  { id: "paused", name: ".gemfx-marquee--paused" },
  { id: "inactive", name: ".gemfx-marquee--inactive" },
  { id: "disabled", name: ".gemfx-marquee--disabled" },
  { id: "track", name: ".gemfx-marquee__track" },
  { id: "copy", name: ".gemfx-marquee__copy" },
  { id: "surface", name: ".gemfx-marquee__surface" },
  { id: "clone", name: ".gemfx-marquee__clone" },
  { id: "item", name: ".gemfx-marquee__item, .gemfx-marquee__item--clone" },
] as const;

export const marqueeCssVariables = [
  { id: "duration", name: "--gemfx-marquee-duration" },
  { id: "delay", name: "--gemfx-marquee-delay" },
  { id: "gap", name: "--gemfx-marquee-gap" },
  { id: "shift", name: "--gemfx-marquee-shift" },
  { id: "width", name: "--gemfx-marquee-width" },
  { id: "height", name: "--gemfx-marquee-height" },
] as const;

export const marqueeTokens = [{ id: "easingLinear", name: "--gemfx-easing-linear" }] as const;

export const marqueeA11yIds = [
  "reducedMotion",
  "ignoreReducedMotion",
  "clone",
  "pause",
  "keyboard",
  "content",
] as const;
