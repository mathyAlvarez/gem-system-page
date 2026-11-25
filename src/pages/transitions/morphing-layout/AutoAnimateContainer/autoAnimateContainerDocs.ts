export const autoAnimateContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const autoAnimateAppearanceProps = [
  { name: "axis", type: '"width" | "height" | "both"', defaultValue: '"height"' },
  { name: "overflow", type: '"hidden" | "visible" | "clip"', defaultValue: '"hidden"' },
  { name: "animateOpacity", type: "boolean", defaultValue: "false" },
] as const;

export const autoAnimateTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"standard"',
  },
] as const;

export const autoAnimateStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const autoAnimateEventProps = [
  { name: "onAutoAnimate", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outAutoAnimate", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const autoAnimateStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "AutoAnimateContainerClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const autoAnimateCssClasses = [
  { id: "root", name: ".gemst-auto-animate-container" },
  { id: "axis", name: ".gemst-auto-animate-container--axis-{height|width|both}" },
  { id: "overflow", name: ".gemst-auto-animate-container--overflow-{hidden|visible|clip}" },
  { id: "animateOpacity", name: ".gemst-auto-animate-container--animate-opacity" },
  { id: "animating", name: ".gemst-auto-animate-container--animating" },
  { id: "settled", name: ".gemst-auto-animate-container--settled" },
  { id: "disabled", name: ".gemst-auto-animate-container--disabled" },
  { id: "surface", name: ".gemst-auto-animate-container__surface" },
] as const;

export const autoAnimateCssVariables = [
  { id: "duration", name: "--gemst-auto-animate-duration" },
  { id: "delay", name: "--gemst-auto-animate-delay" },
  { id: "easing", name: "--gemst-auto-animate-easing" },
] as const;

export const autoAnimateTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
] as const;

export const autoAnimateA11yIds = [
  "noPresence",
  "reducedMotion",
  "ignoreReducedMotion",
  "overflow",
  "asChild",
] as const;
