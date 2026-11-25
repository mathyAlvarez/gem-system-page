export const staggerContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const staggerAppearanceProps = [
  { name: "isIn", type: "boolean", defaultValue: "true" },
  { name: "from", type: '"top" | "bottom" | "left" | "right"', defaultValue: '"bottom"' },
  { name: "distance", type: "number", defaultValue: "8" },
  { name: "staggerDirection", type: "1 | -1", defaultValue: "1" },
  { name: "staggerShuffled", type: "boolean", defaultValue: "false" },
  { name: "reverseExit", type: "boolean", defaultValue: "true" },
  { name: "preserveSpace", type: "boolean", defaultValue: "false" },
  { name: "center", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
] as const;

export const staggerTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "staggerDelay",
    type: "number | { enter?: number; exit?: number }",
    defaultValue: "50",
  },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"standard"',
  },
] as const;

export const staggerStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const staggerEventProps = [
  { name: "onItemEnter", type: "(index: number) => void", defaultValue: "—" },
  { name: "onStagger", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outStagger", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const staggerStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "StaggerGroupClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const staggerCssClasses = [
  { id: "root", name: ".gemst-stagger-group" },
  { id: "item", name: ".gemst-stagger-group__item" },
  { id: "in", name: ".gemst-stagger-group--in" },
  { id: "out", name: ".gemst-stagger-group--out" },
  { id: "fromTop", name: ".gemst-stagger-group--from-top" },
  { id: "fromBottom", name: ".gemst-stagger-group--from-bottom" },
  { id: "fromLeft", name: ".gemst-stagger-group--from-left" },
  { id: "fromRight", name: ".gemst-stagger-group--from-right" },
  { id: "center", name: ".gemst-stagger-group--center" },
  { id: "disabled", name: ".gemst-stagger-group--disabled" },
] as const;

export const staggerCssVariables = [
  { id: "duration", name: "--gemst-stagger-duration" },
  { id: "easing", name: "--gemst-stagger-easing" },
  { id: "distance", name: "--gemst-stagger-distance" },
  { id: "itemDelay", name: "--gemst-stagger-item-delay" },
] as const;

export const staggerTokens = [{ id: "easingStandard", name: "--gemst-easing-standard" }] as const;

export const staggerA11yIds = [
  "presence",
  "cascade",
  "reducedMotion",
  "ignoreReducedMotion",
  "preserveSpace",
  "asChild",
] as const;
