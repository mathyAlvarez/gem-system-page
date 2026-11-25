export const fadeContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const fadeAppearanceProps = [
  { name: "isIn", type: "boolean", defaultValue: "true" },
  { name: "keepMounted", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "initial", type: "boolean", defaultValue: "true" },
] as const;

export const fadeTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"standard"',
  },
] as const;

export const fadeStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const fadeEventProps = [
  { name: "onFade", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outFade", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "onPhaseChange", type: "(phase: PresencePhase) => void", defaultValue: "—" },
] as const;

export const fadeStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "FadeTransitionClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const fadeCssClasses = [
  { id: "root", name: ".gemst-fade-transition" },
  { id: "in", name: ".gemst-fade-transition--in" },
  { id: "out", name: ".gemst-fade-transition--out" },
  { id: "prep", name: ".gemst-fade-transition--prep" },
  { id: "keepMountedHidden", name: ".gemst-fade-transition--keep-mounted-hidden" },
  { id: "disabled", name: ".gemst-fade-transition--disabled" },
] as const;

export const fadeCssVariables = [
  { id: "duration", name: "--gemst-fade-duration" },
  { id: "delay", name: "--gemst-fade-delay" },
  { id: "easing", name: "--gemst-fade-easing" },
] as const;

export const fadeTokens = [{ id: "easingStandard", name: "--gemst-easing-standard" }] as const;

export const fadeA11yIds = [
  "presence",
  "reducedMotion",
  "ignoreReducedMotion",
  "keepMounted",
  "asChild",
] as const;
