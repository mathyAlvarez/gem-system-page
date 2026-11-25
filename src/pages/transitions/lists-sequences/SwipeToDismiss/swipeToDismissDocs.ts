export const swipeContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const swipeAppearanceProps = [
  { name: "isIn", type: "boolean", defaultValue: "true" },
  {
    name: "direction",
    type: '"horizontal" | "vertical" | "left" | "right" | "up" | "down"',
    defaultValue: '"horizontal"',
  },
  {
    name: "dismissDirection",
    type: '"left" | "right" | "up" | "down" | "both"',
    defaultValue: '"both"',
  },
  { name: "rubberband", type: "boolean", defaultValue: "true" },
  { name: "threshold", type: "number", defaultValue: "0.35" },
  { name: "velocityThreshold", type: "number", defaultValue: "0.5" },
  { name: "markSelected", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
] as const;

export const swipeTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '{ enter: "standard", exit: "exit" }',
  },
] as const;

export const swipeStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const swipeEventProps = [
  { name: "onDismiss", type: "() => void", defaultValue: "—" },
  { name: "onSwipeStart", type: "(event: PointerEvent) => void", defaultValue: "—" },
  { name: "onSwipeMove", type: "(data: SwipeToDismissMoveData) => void", defaultValue: "—" },
  { name: "onSwipeCancel", type: "() => void", defaultValue: "—" },
  { name: "onSwipe", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outSwipe", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const swipeStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SwipeToDismissClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const swipeCssClasses = [
  { id: "root", name: ".gemst-swipe-to-dismiss" },
  { id: "horizontal", name: ".gemst-swipe-to-dismiss--horizontal" },
  { id: "vertical", name: ".gemst-swipe-to-dismiss--vertical" },
  { id: "dragging", name: ".gemst-swipe-to-dismiss--dragging" },
  { id: "entering", name: ".gemst-swipe-to-dismiss--entering" },
  { id: "settling", name: ".gemst-swipe-to-dismiss--settling" },
  { id: "dismissing", name: ".gemst-swipe-to-dismiss--dismissing" },
  { id: "out", name: ".gemst-swipe-to-dismiss--out" },
  { id: "markSelected", name: ".gemst-swipe-to-dismiss--mark-selected" },
  { id: "disabled", name: ".gemst-swipe-to-dismiss--disabled" },
  { id: "idle", name: ".gemst-swipe-to-dismiss--idle" },
] as const;

export const swipeCssVariables = [
  { id: "duration", name: "--gemst-swipe-duration" },
  { id: "delay", name: "--gemst-swipe-delay" },
  { id: "easing", name: "--gemst-swipe-easing" },
  { id: "x", name: "--gemst-swipe-x" },
  { id: "y", name: "--gemst-swipe-y" },
  { id: "progress", name: "--gemst-swipe-progress" },
  { id: "selectedWidth", name: "--gemst-swipe-selected-width" },
  { id: "selectedColor", name: "--gemst-swipe-selected-color" },
  { id: "selectedOffset", name: "--gemst-swipe-selected-offset" },
  { id: "selectedRadius", name: "--gemst-swipe-selected-radius" },
] as const;

export const swipeTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const swipeA11yIds = [
  "gesture",
  "scroll",
  "dismiss",
  "reducedMotion",
  "ignoreReducedMotion",
  "host",
  "asChild",
] as const;
