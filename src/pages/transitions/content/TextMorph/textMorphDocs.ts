export const textMorphContentProps = [
  { name: "value", type: "string | number", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const textMorphAppearanceProps = [
  { name: "effect", type: '"fade" | "up" | "down"', defaultValue: '"up"' },
  { name: "splitBy", type: '"words" | "characters" | "lines"', defaultValue: '"words"' },
] as const;

export const textMorphTimingProps = [
  { name: "duration", type: "number | { enter?: number; exit?: number }", defaultValue: "300" },
  { name: "delay", type: "number | { enter?: number; exit?: number }", defaultValue: "0" },
  {
    name: "easing",
    type: "EasingToken | string | { enter?: EasingToken | string; exit?: EasingToken | string }",
    defaultValue: '{ enter: "standard", exit: "exit" }',
  },
  { name: "staggerDelay", type: "number", defaultValue: "0" },
] as const;

export const textMorphStateProps = [
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "unmountOnExit", type: "boolean", defaultValue: "false" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const textMorphEventProps = [
  { name: "onTextMorph", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
  { name: "outTextMorph", type: "(event: TransitionPhaseEvent) => void", defaultValue: "—" },
] as const;

export const textMorphStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "TextMorphClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const textMorphCssClasses = [
  { id: "root", name: ".gemst-text-morph" },
  { id: "effect", name: ".gemst-text-morph--{fade|up|down}" },
  { id: "split", name: ".gemst-text-morph--split-{words|characters|lines}" },
  { id: "playing", name: ".gemst-text-morph--playing" },
  { id: "idle", name: ".gemst-text-morph--idle" },
  { id: "disabled", name: ".gemst-text-morph--disabled" },
  { id: "ready", name: ".gemst-text-morph--ready" },
  { id: "from", name: ".gemst-text-morph--from" },
  { id: "slot", name: ".gemst-text-morph__slot" },
  { id: "slotRole", name: ".gemst-text-morph__slot--{incoming|outgoing}" },
  { id: "slotState", name: ".gemst-text-morph__slot--{in|out}" },
  { id: "token", name: ".gemst-text-morph__token" },
] as const;

export const textMorphCssVariables = [
  { id: "enterDuration", name: "--gemst-text-morph-enter-duration" },
  { id: "exitDuration", name: "--gemst-text-morph-exit-duration" },
  { id: "enterDelay", name: "--gemst-text-morph-enter-delay" },
  { id: "exitDelay", name: "--gemst-text-morph-exit-delay" },
  { id: "enterEasing", name: "--gemst-text-morph-enter-easing" },
  { id: "exitEasing", name: "--gemst-text-morph-exit-easing" },
  { id: "staggerDelay", name: "--gemst-text-morph-stagger-delay" },
  { id: "shift", name: "--gemst-text-morph-shift" },
] as const;

export const textMorphTokens = [
  { id: "easingStandard", name: "--gemst-easing-standard" },
  { id: "easingExit", name: "--gemst-easing-exit" },
] as const;

export const textMorphA11yIds = [
  "live",
  "busy",
  "outgoing",
  "reducedMotion",
  "ignoreReducedMotion",
  "asChild",
] as const;
