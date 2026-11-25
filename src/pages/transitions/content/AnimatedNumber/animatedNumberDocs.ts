export const animatedNumberContentProps = [
  { name: "value", type: "number", defaultValue: "—" },
  { name: "prefix", type: "ReactNode", defaultValue: "—" },
  { name: "suffix", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const animatedNumberFormatProps = [
  { name: "locales", type: "Intl.LocalesArgument", defaultValue: "—" },
  { name: "formatOptions", type: "Intl.NumberFormatOptions", defaultValue: "—" },
  { name: "format", type: "(value: number) => string", defaultValue: "—" },
  { name: "round", type: "number", defaultValue: "—" },
] as const;

export const animatedNumberAppearanceProps = [
  { name: "effect", type: '"count" | "fade" | "up" | "down"', defaultValue: '"count"' },
  { name: "trendClassName", type: "{ up?: string; down?: string }", defaultValue: "—" },
] as const;

export const animatedNumberTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "500" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '{ enter: "standard", exit: "exit" }',
  },
] as const;

export const animatedNumberStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const animatedNumberEventProps = [
  { name: "onStart", type: "(from: number) => void", defaultValue: "—" },
  { name: "onComplete", type: "(to: number) => void", defaultValue: "—" },
  { name: "onAnimatedNumber", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outAnimatedNumber", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const animatedNumberStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "AnimatedNumberClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const animatedNumberCssClasses = [
  { id: "root", name: ".gemst-animated-number" },
  { id: "effect", name: ".gemst-animated-number--{count|fade|up|down}" },
  { id: "playing", name: ".gemst-animated-number--playing" },
  { id: "idle", name: ".gemst-animated-number--idle" },
  { id: "disabled", name: ".gemst-animated-number--disabled" },
  { id: "ready", name: ".gemst-animated-number--ready" },
  { id: "from", name: ".gemst-animated-number--from" },
  { id: "value", name: ".gemst-animated-number__value" },
  { id: "sr", name: ".gemst-animated-number__sr" },
  { id: "slot", name: ".gemst-animated-number__slot" },
  { id: "slotRole", name: ".gemst-animated-number__slot--{incoming|outgoing}" },
  { id: "slotState", name: ".gemst-animated-number__slot--{in|out}" },
] as const;

export const animatedNumberCssVariables = [
  { id: "duration", name: "--gemst-animated-number-duration" },
  { id: "delay", name: "--gemst-animated-number-delay" },
  { id: "easing", name: "--gemst-animated-number-easing" },
  { id: "enterDuration", name: "--gemst-animated-number-enter-duration" },
  { id: "exitDuration", name: "--gemst-animated-number-exit-duration" },
  { id: "enterDelay", name: "--gemst-animated-number-enter-delay" },
  { id: "exitDelay", name: "--gemst-animated-number-exit-delay" },
  { id: "enterEasing", name: "--gemst-animated-number-enter-easing" },
  { id: "exitEasing", name: "--gemst-animated-number-exit-easing" },
  { id: "shift", name: "--gemst-animated-number-shift" },
] as const;

export const animatedNumberTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const animatedNumberA11yIds = [
  "live",
  "busy",
  "affixes",
  "reducedMotion",
  "ignoreReducedMotion",
  "tabular",
  "asChild",
] as const;
