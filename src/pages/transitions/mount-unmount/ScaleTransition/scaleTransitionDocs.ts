export const scaleContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const scaleAppearanceProps = [
  { name: "isIn", type: "boolean", defaultValue: "true" },
  { name: "scale", type: "number", defaultValue: "0.92" },
  { name: "origin", type: "string", defaultValue: '"center"' },
  { name: "preserveSpace", type: "boolean", defaultValue: "false" },
  { name: "keepMounted", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "initial", type: "boolean", defaultValue: "true" },
] as const;

export const scaleTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"standard"',
  },
] as const;

export const scaleStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const scaleEventProps = [
  { name: "onScale", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outScale", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "onPhaseChange", type: "(phase: PresencePhase) => void", defaultValue: "—" },
] as const;

export const scaleStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ScaleTransitionClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const scaleCssClasses = [
  { id: "root", name: ".gemst-scale-transition" },
  { id: "in", name: ".gemst-scale-transition--in" },
  { id: "out", name: ".gemst-scale-transition--out" },
  { id: "prep", name: ".gemst-scale-transition--prep" },
  { id: "keepMountedHidden", name: ".gemst-scale-transition--keep-mounted-hidden" },
  { id: "disabled", name: ".gemst-scale-transition--disabled" },
] as const;

export const scaleCssVariables = [
  { id: "duration", name: "--gemst-scale-duration" },
  { id: "delay", name: "--gemst-scale-delay" },
  { id: "easing", name: "--gemst-scale-easing" },
  { id: "from", name: "--gemst-scale-from" },
  { id: "origin", name: "--gemst-scale-origin" },
] as const;

export const scaleTokens = [{ id: "easingStandard", name: "--gemst-easing-standard" }] as const;

export const scaleA11yIds = [
  "presence",
  "reducedMotion",
  "ignoreReducedMotion",
  "preserveSpace",
  "keepMounted",
  "asChild",
] as const;
