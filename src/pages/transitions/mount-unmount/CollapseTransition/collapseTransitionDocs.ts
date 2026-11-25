export const collapseContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const collapseAppearanceProps = [
  { name: "isIn", type: "boolean", defaultValue: "true" },
  { name: "dimension", type: '"height" | "width"', defaultValue: '"height"' },
  { name: "collapsedSize", type: "number | string", defaultValue: "0" },
  { name: "preserveSpace", type: "boolean", defaultValue: "false" },
  { name: "keepMounted", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "initial", type: "boolean", defaultValue: "true" },
] as const;

export const collapseTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"standard"',
  },
] as const;

export const collapseStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const collapseEventProps = [
  { name: "onCollapse", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outCollapse", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "onPhaseChange", type: "(phase: PresencePhase) => void", defaultValue: "—" },
  { name: "onDimensionChange", type: "(size: number) => void", defaultValue: "—" },
] as const;

export const collapseStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "CollapseTransitionClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const collapseCssClasses = [
  { id: "root", name: ".gemst-collapse-transition" },
  { id: "dimension", name: ".gemst-collapse-transition--dimension-{height|width}" },
  { id: "in", name: ".gemst-collapse-transition--in" },
  { id: "out", name: ".gemst-collapse-transition--out" },
  { id: "expanded", name: ".gemst-collapse-transition--expanded" },
  { id: "peek", name: ".gemst-collapse-transition--peek" },
  { id: "preserveSpace", name: ".gemst-collapse-transition--preserve-space" },
  { id: "keepMountedHidden", name: ".gemst-collapse-transition--keep-mounted-hidden" },
  { id: "disabled", name: ".gemst-collapse-transition--disabled" },
  { id: "surface", name: ".gemst-collapse-transition__surface" },
] as const;

export const collapseCssVariables = [
  { id: "duration", name: "--gemst-collapse-duration" },
  { id: "delay", name: "--gemst-collapse-delay" },
  { id: "easing", name: "--gemst-collapse-easing" },
] as const;

export const collapseTokens = [{ id: "easingStandard", name: "--gemst-easing-standard" }] as const;

export const collapseA11yIds = [
  "presence",
  "reducedMotion",
  "ignoreReducedMotion",
  "trigger",
  "preserveSpace",
  "asChild",
] as const;
