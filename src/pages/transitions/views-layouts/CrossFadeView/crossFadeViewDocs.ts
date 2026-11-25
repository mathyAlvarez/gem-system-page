export const crossFadeContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "first", type: "ReactNode", defaultValue: "—" },
  { name: "second", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const crossFadeAppearanceProps = [
  { name: "isSecond", type: "boolean", defaultValue: "false" },
  { name: "viewKey", type: "string | number", defaultValue: "—" },
  { name: "mode", type: '"sync" | "wait" | "pop-layout"', defaultValue: '"sync"' },
  { name: "keepState", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "pagination", type: "ViewPaginationInput", defaultValue: "—" },
  { name: "paginationIndex", type: "number", defaultValue: "—" },
  { name: "swipe", type: "ViewSwipeInput", defaultValue: "—" },
] as const;

export const crossFadeTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '{ enter: "standard", exit: "exit" }',
  },
] as const;

export const crossFadeStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const crossFadeEventProps = [
  { name: "onPagination", type: "(index: number) => void", defaultValue: "—" },
  {
    name: "onViewChange",
    type: "(newKey: string | number, oldKey?: string | number) => void",
    defaultValue: "—",
  },
  { name: "onCrossFade", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outCrossFade", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const crossFadeStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "CrossFadeViewClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const crossFadeCssClasses = [
  { id: "root", name: ".gemst-cross-fade-view" },
  { id: "pane", name: ".gemst-cross-fade-view__pane" },
  { id: "incoming", name: ".gemst-cross-fade-view__pane--incoming" },
  { id: "outgoing", name: ".gemst-cross-fade-view__pane--outgoing" },
  { id: "in", name: ".gemst-cross-fade-view__pane--in" },
  { id: "out", name: ".gemst-cross-fade-view__pane--out" },
  { id: "kept", name: ".gemst-cross-fade-view__pane--kept" },
  { id: "pagination", name: ".gemst-cross-fade-view__pagination" },
  { id: "dot", name: ".gemst-cross-fade-view__dot" },
  { id: "dotActive", name: ".gemst-cross-fade-view__dot--active" },
  { id: "modePop", name: ".gemst-cross-fade-view--mode-pop-layout" },
  { id: "playing", name: ".gemst-cross-fade-view--playing" },
  { id: "disabled", name: ".gemst-cross-fade-view--disabled" },
  { id: "swiping", name: ".gemst-cross-fade-view--swiping" },
] as const;

export const crossFadeCssVariables = [
  { id: "enterDuration", name: "--gemst-cross-fade-enter-duration" },
  { id: "exitDuration", name: "--gemst-cross-fade-exit-duration" },
  { id: "enterDelay", name: "--gemst-cross-fade-enter-delay" },
  { id: "exitDelay", name: "--gemst-cross-fade-exit-delay" },
  { id: "enterEasing", name: "--gemst-cross-fade-enter-easing" },
  { id: "exitEasing", name: "--gemst-cross-fade-exit-easing" },
  { id: "paginationColor", name: "--gemst-cross-fade-pagination-color" },
  { id: "paginationActiveColor", name: "--gemst-cross-fade-pagination-active-color" },
  { id: "paginationSize", name: "--gemst-cross-fade-pagination-size" },
  { id: "paginationGap", name: "--gemst-cross-fade-pagination-gap" },
] as const;

export const crossFadeTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const crossFadeA11yIds = [
  "presence",
  "pagination",
  "swipe",
  "reducedMotion",
  "ignoreReducedMotion",
  "keepState",
  "asChild",
] as const;
