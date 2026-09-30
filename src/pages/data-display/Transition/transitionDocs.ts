export const transitionPresenceProps = [
  { name: "in", type: "boolean", defaultValue: "false" },
  { name: "children", type: "ReactNode | (status: TransitionStatus) => ReactNode", defaultValue: "—" },
  { name: "appear", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "true" },
] as const;

export const transitionMotionProps = [
  {
    name: "effect",
    type: '"fade" | "scale" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "collapse"',
    defaultValue: '"fade"',
  },
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "220" },
  { name: "delay", type: "number", defaultValue: "0" },
  { name: "easing", type: "string", defaultValue: '"ease"' },
  { name: "block", type: "boolean", defaultValue: "false" },
] as const;

export const transitionEventProps = [
  { name: "onEnter", type: "() => void", defaultValue: "—" },
  { name: "onEntering", type: "() => void", defaultValue: "—" },
  { name: "onEntered", type: "() => void", defaultValue: "—" },
  { name: "onExit", type: "() => void", defaultValue: "—" },
  { name: "onExiting", type: "() => void", defaultValue: "—" },
  { name: "onExited", type: "() => void", defaultValue: "—" },
] as const;

export const transitionStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "{ root?: string; inner?: string }", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLDivElement>", defaultValue: "—" },
] as const;

export const transitionCssClasses = [
  { name: ".gem-transition", rule: "root" },
  { name: ".gem-transition--fade", rule: "effect" },
  { name: ".gem-transition--enter", rule: "enter" },
  { name: ".gem-transition--enter-active", rule: "enterActive" },
  { name: ".gem-transition--entered", rule: "entered" },
  { name: ".gem-transition--exit", rule: "exit" },
  { name: ".gem-transition--exit-active", rule: "exitActive" },
  { name: ".gem-transition--exited", rule: "exited" },
  { name: ".gem-transition--block", rule: "block" },
  { name: ".gem-transition__inner", rule: "inner" },
] as const;

export const transitionCssVariables = [
  "--gem-transition-duration",
  "--gem-transition-delay",
  "--gem-transition-easing",
  "--gem-transition-offset",
] as const;
