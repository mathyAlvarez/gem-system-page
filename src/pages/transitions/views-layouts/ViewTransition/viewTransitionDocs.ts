export const viewContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "view", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const viewAppearanceProps = [
  { name: "viewKey", type: "string | number", defaultValue: "—" },
  { name: "isIn", type: "boolean", defaultValue: "true" },
  {
    name: "effect",
    type: '"fade" | "slide-left" | "slide-right" | "slide-up" | "slide-down" | "scale"',
    defaultValue: '"fade"',
  },
  { name: "name", type: "string", defaultValue: '"gemst-view"' },
  { name: "fallback", type: '"fade" | "none"', defaultValue: '"fade"' },
  { name: "skipInitial", type: "boolean", defaultValue: "true" },
  { name: "includeRoot", type: "boolean", defaultValue: "false" },
  { name: "types", type: "readonly string[]", defaultValue: "—" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
] as const;

export const viewTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '{ enter: "standard", exit: "exit" }',
  },
] as const;

export const viewStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const viewEventProps = [
  { name: "onViewTransition", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outViewTransition", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const viewStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ViewTransitionClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const viewCssClasses = [
  { id: "root", name: ".gemst-view-transition" },
  { id: "fallbackFade", name: ".gemst-view-transition--fallback-fade" },
  { id: "fallbackPane", name: ".gemst-view-transition__fallback" },
  { id: "playing", name: ".gemst-view-transition--playing" },
  { id: "disabled", name: ".gemst-view-transition--disabled" },
  { id: "activeDoc", name: "html.gemst-view-transition-active" },
] as const;

export const viewCssVariables = [
  { id: "enterDuration", name: "--gemst-view-transition-enter-duration" },
  { id: "exitDuration", name: "--gemst-view-transition-exit-duration" },
  { id: "enterDelay", name: "--gemst-view-transition-enter-delay" },
  { id: "exitDelay", name: "--gemst-view-transition-exit-delay" },
  { id: "enterEasing", name: "--gemst-view-transition-enter-easing" },
  { id: "exitEasing", name: "--gemst-view-transition-exit-easing" },
  { id: "name", name: "--gemst-view-transition-name" },
] as const;

export const viewTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const viewA11yIds = [
  "presence",
  "nativeApi",
  "fallback",
  "reducedMotion",
  "ignoreReducedMotion",
  "asChild",
] as const;
