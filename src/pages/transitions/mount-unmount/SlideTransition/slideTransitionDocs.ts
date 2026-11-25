export const slideContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const slideAppearanceProps = [
  { name: "isIn", type: "boolean", defaultValue: "true" },
  { name: "from", type: '"top" | "bottom" | "left" | "right"', defaultValue: '"bottom"' },
  { name: "axis", type: '"x" | "y"', defaultValue: "—" },
  { name: "fade", type: "boolean", defaultValue: "true" },
  { name: "offset", type: "number | string", defaultValue: '"1rem"' },
  { name: "keepMounted", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "initial", type: "boolean", defaultValue: "true" },
] as const;

export const slideTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"standard"',
  },
] as const;

export const slideStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const slideEventProps = [
  { name: "onSlide", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outSlide", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "onPhaseChange", type: "(phase: PresencePhase) => void", defaultValue: "—" },
] as const;

export const slideStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SlideTransitionClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const slideCssClasses = [
  { id: "root", name: ".gemst-slide-transition" },
  { id: "fromTop", name: ".gemst-slide-transition--from-top" },
  { id: "fromBottom", name: ".gemst-slide-transition--from-bottom" },
  { id: "fromLeft", name: ".gemst-slide-transition--from-left" },
  { id: "fromRight", name: ".gemst-slide-transition--from-right" },
  { id: "fade", name: ".gemst-slide-transition--fade" },
  { id: "noFade", name: ".gemst-slide-transition--no-fade" },
  { id: "in", name: ".gemst-slide-transition--in" },
  { id: "out", name: ".gemst-slide-transition--out" },
  { id: "prep", name: ".gemst-slide-transition--prep" },
  { id: "keepMountedHidden", name: ".gemst-slide-transition--keep-mounted-hidden" },
  { id: "disabled", name: ".gemst-slide-transition--disabled" },
] as const;

export const slideCssVariables = [
  { id: "duration", name: "--gemst-slide-duration" },
  { id: "delay", name: "--gemst-slide-delay" },
  { id: "easing", name: "--gemst-slide-easing" },
  { id: "offset", name: "--gemst-slide-offset" },
] as const;

export const slideTokens = [{ id: "easingStandard", name: "--gemst-easing-standard" }] as const;

export const slideA11yIds = [
  "presence",
  "reducedMotion",
  "ignoreReducedMotion",
  "fade",
  "keepMounted",
  "asChild",
] as const;
