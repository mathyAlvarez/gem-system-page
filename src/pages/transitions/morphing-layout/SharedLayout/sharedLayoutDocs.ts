export const sharedLayoutContentProps = [
  {
    name: "children",
    type: "ReactNode | ((state: SharedLayoutRenderState) => ReactNode)",
    defaultValue: "—",
  },
  { name: "collapsed", type: "ReactNode", defaultValue: "—" },
  { name: "expanded", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const sharedLayoutAppearanceProps = [
  { name: "isExpanded", type: "boolean", defaultValue: "false" },
  { name: "layoutId", type: "string", defaultValue: "—" },
  { name: "crossfade", type: "boolean", defaultValue: "true" },
] as const;

export const sharedLayoutTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '"emphasized"',
  },
] as const;

export const sharedLayoutStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const sharedLayoutEventProps = [
  { name: "onStart", type: "() => void", defaultValue: "—" },
  { name: "onComplete", type: "() => void", defaultValue: "—" },
  { name: "onSharedLayout", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outSharedLayout", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const sharedLayoutStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SharedLayoutClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const sharedLayoutCssClasses = [
  { id: "root", name: ".gemst-shared-layout" },
  { id: "collapsed", name: ".gemst-shared-layout--collapsed" },
  { id: "expanded", name: ".gemst-shared-layout--expanded" },
  { id: "morphing", name: ".gemst-shared-layout--morphing" },
  { id: "playing", name: ".gemst-shared-layout--playing" },
  { id: "crossfade", name: ".gemst-shared-layout--crossfade" },
  { id: "shared", name: ".gemst-shared-layout--shared" },
  { id: "disabled", name: ".gemst-shared-layout--disabled" },
  { id: "surface", name: ".gemst-shared-layout__surface" },
  { id: "surfaceCollapsed", name: ".gemst-shared-layout__surface--collapsed" },
  { id: "surfaceExpanded", name: ".gemst-shared-layout__surface--expanded" },
] as const;

export const sharedLayoutCssVariables = [
  { id: "duration", name: "--gemst-shared-layout-duration" },
  { id: "delay", name: "--gemst-shared-layout-delay" },
  { id: "easing", name: "--gemst-shared-layout-easing" },
  { id: "z", name: "--gemst-shared-layout-z" },
] as const;

export const sharedLayoutTokens = [
  { id: "easingEmphasized", name: "--gemst-easing-emphasized" },
] as const;

export const sharedLayoutA11yIds = [
  "motionOnly",
  "reducedMotion",
  "ignoreReducedMotion",
  "crossfade",
  "layoutId",
  "asChild",
] as const;
