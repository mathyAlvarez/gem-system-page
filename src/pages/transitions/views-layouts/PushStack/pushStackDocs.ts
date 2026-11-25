export const pushContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "view", type: "ReactNode", defaultValue: "—" },
  { name: "views", type: "ReactNode[]", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const pushAppearanceProps = [
  { name: "index", type: "number", defaultValue: "—" },
  { name: "viewKey", type: "string | number", defaultValue: "—" },
  { name: "direction", type: '"push" | "pop"', defaultValue: "—" },
  { name: "axis", type: '"x" | "y"', defaultValue: '"x"' },
  { name: "mode", type: '"sync" | "wait" | "pop-layout"', defaultValue: '"sync"' },
  { name: "keepState", type: "boolean", defaultValue: "false" },
  { name: "cover", type: "number | string", defaultValue: '"100%"' },
  { name: "recede", type: "number | string", defaultValue: '"25%"' },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "pagination", type: "ViewPaginationInput", defaultValue: "—" },
  { name: "paginationIndex", type: "number", defaultValue: "—" },
  { name: "swipe", type: "ViewSwipeInput", defaultValue: "—" },
] as const;

export const pushTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '{ enter: "standard", exit: "exit" }',
  },
] as const;

export const pushStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const pushEventProps = [
  { name: "onPagination", type: "(index: number) => void", defaultValue: "—" },
  {
    name: "onViewChange",
    type: "(newKey: string | number, oldKey?: string | number) => void",
    defaultValue: "—",
  },
  { name: "onPushStack", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outPushStack", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const pushStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "PushStackClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const pushCssClasses = [
  { id: "root", name: ".gemst-push-stack" },
  { id: "pane", name: ".gemst-push-stack__pane" },
  { id: "incoming", name: ".gemst-push-stack__pane--incoming" },
  { id: "outgoing", name: ".gemst-push-stack__pane--outgoing" },
  { id: "in", name: ".gemst-push-stack__pane--in" },
  { id: "out", name: ".gemst-push-stack__pane--out" },
  { id: "kept", name: ".gemst-push-stack__pane--kept" },
  { id: "pagination", name: ".gemst-push-stack__pagination" },
  { id: "dot", name: ".gemst-push-stack__dot" },
  { id: "dotActive", name: ".gemst-push-stack__dot--active" },
  { id: "axisY", name: ".gemst-push-stack--axis-y" },
  { id: "push", name: ".gemst-push-stack--push" },
  { id: "pop", name: ".gemst-push-stack--pop" },
  { id: "modePop", name: ".gemst-push-stack--mode-pop-layout" },
  { id: "playing", name: ".gemst-push-stack--playing" },
  { id: "disabled", name: ".gemst-push-stack--disabled" },
  { id: "swiping", name: ".gemst-push-stack--swiping" },
] as const;

export const pushCssVariables = [
  { id: "enterDuration", name: "--gemst-push-stack-enter-duration" },
  { id: "exitDuration", name: "--gemst-push-stack-exit-duration" },
  { id: "enterDelay", name: "--gemst-push-stack-enter-delay" },
  { id: "exitDelay", name: "--gemst-push-stack-exit-delay" },
  { id: "enterEasing", name: "--gemst-push-stack-enter-easing" },
  { id: "exitEasing", name: "--gemst-push-stack-exit-easing" },
  { id: "cover", name: "--gemst-push-stack-cover" },
  { id: "recede", name: "--gemst-push-stack-recede" },
  { id: "depthScale", name: "--gemst-push-stack-depth-scale" },
  { id: "depthOpacity", name: "--gemst-push-stack-depth-opacity" },
  { id: "paginationColor", name: "--gemst-push-stack-pagination-color" },
  { id: "paginationActiveColor", name: "--gemst-push-stack-pagination-active-color" },
] as const;

export const pushTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const pushA11yIds = [
  "presence",
  "pagination",
  "swipe",
  "reducedMotion",
  "ignoreReducedMotion",
  "keepState",
  "asChild",
] as const;
