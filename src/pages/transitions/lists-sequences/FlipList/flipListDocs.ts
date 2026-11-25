export const flipContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const flipAppearanceProps = [
  { name: "axis", type: '"x" | "y" | "both"', defaultValue: '"both"' },
  { name: "distance", type: "number", defaultValue: "8" },
  { name: "staggerKey", type: "string | number", defaultValue: "—" },
  { name: "maintainScroll", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
] as const;

export const flipTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "staggerDelay",
    type: "number | { enter?: number; exit?: number }",
    defaultValue: "0",
  },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"emphasized"',
  },
] as const;

export const flipStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const flipEventProps = [
  { name: "onFlip", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outFlip", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const flipStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "FlipListClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const flipCssClasses = [
  { id: "root", name: ".gemst-flip-list" },
  { id: "item", name: ".gemst-flip-list__item" },
  { id: "enter", name: ".gemst-flip-list__item--enter" },
  { id: "exit", name: ".gemst-flip-list__item--exit" },
  { id: "in", name: ".gemst-flip-list__item--in" },
  { id: "out", name: ".gemst-flip-list__item--out" },
  { id: "playing", name: ".gemst-flip-list__item--playing" },
  { id: "idle", name: ".gemst-flip-list--idle" },
  { id: "disabled", name: ".gemst-flip-list--disabled" },
] as const;

export const flipCssVariables = [
  { id: "moveDuration", name: "--gemst-flip-move-duration" },
  { id: "enterDuration", name: "--gemst-flip-enter-duration" },
  { id: "exitDuration", name: "--gemst-flip-exit-duration" },
  { id: "delay", name: "--gemst-flip-delay" },
  { id: "easing", name: "--gemst-flip-easing" },
  { id: "exitEasing", name: "--gemst-flip-exit-easing" },
  { id: "distance", name: "--gemst-flip-distance" },
] as const;

export const flipTokens = [
  { id: "easingEmphasized", name: "--gemst-easing-emphasized" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const flipA11yIds = [
  "keys",
  "host",
  "filter",
  "reducedMotion",
  "ignoreReducedMotion",
  "asChild",
] as const;
