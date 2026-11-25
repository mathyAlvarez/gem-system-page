export const tilt3DContentProps = [
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "asChild", type: "boolean", defaultValue: "false" },
] as const;

export const tilt3DAppearanceProps = [
  { name: "maxTilt", type: "number", defaultValue: "—" },
  { name: "intensity", type: '"sm" | "md" | "lg" | number', defaultValue: '"md"' },
  { name: "perspective", type: "number | string", defaultValue: "900" },
  { name: "scale", type: "number", defaultValue: "1.04" },
  { name: "reverse", type: "boolean", defaultValue: "false" },
  { name: "glare", type: "boolean", defaultValue: "true" },
  { name: "glareColor", type: "string", defaultValue: '"#ffffff"' },
] as const;

export const tilt3DTimingProps = [
  { name: "duration", type: "number", defaultValue: "200" },
  { name: "delay", type: "number", defaultValue: "0" },
] as const;

export const tilt3DStateProps = [
  { name: "trigger", type: '"hover" | "press"', defaultValue: '"hover"' },
  { name: "isActive", type: "boolean", defaultValue: "true" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "disabledOnTouch", type: "boolean", defaultValue: "true" },
  { name: "ignoreReducedMotion", type: "boolean", defaultValue: "false" },
] as const;

export const tilt3DEventProps = [
  { name: "onTilt3D", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
  { name: "outTilt3D", type: "(event: EffectPhaseEvent) => void", defaultValue: "—" },
] as const;

export const tilt3DStylingProps = [
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "Tilt3DClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const tilt3DHookResult = [
  { name: "ref", type: "RefCallback<HTMLElement>" },
  { name: "style", type: "CSSProperties" },
  {
    name: "pointerProps",
    type: "{ onPointerEnter, onPointerLeave, onPointerMove, onPointerDown, onPointerUp, onPointerCancel }",
  },
  { name: "motionClassName", type: "string | undefined" },
  { name: "transform", type: "string" },
  { name: "pose", type: "Tilt3DPose" },
  { name: "glare", type: "boolean" },
  { name: "isTracking", type: "boolean" },
  { name: "isHover", type: "boolean" },
  { name: "isPress", type: "boolean" },
  { name: "tiltOff", type: "boolean" },
  { name: "isPaused", type: "boolean" },
  { name: "isDisabled", type: "boolean" },
] as const;

export const tilt3DCssClasses = [
  { id: "root", name: ".gemfx-tilt3d" },
  { id: "trigger", name: ".gemfx-tilt3d--{hover|press}" },
  { id: "tracking", name: ".gemfx-tilt3d--tracking" },
  { id: "paused", name: ".gemfx-tilt3d--paused" },
  { id: "inactive", name: ".gemfx-tilt3d--inactive" },
  { id: "disabled", name: ".gemfx-tilt3d--disabled" },
  { id: "surface", name: ".gemfx-tilt3d__surface" },
  { id: "glare", name: ".gemfx-tilt3d__glare" },
] as const;

export const tilt3DCssVariables = [
  { id: "rotation", name: "--gemfx-tilt3d-{rx|ry}" },
  { id: "scale", name: "--gemfx-tilt3d-scale" },
  { id: "perspective", name: "--gemfx-tilt3d-perspective" },
  { id: "duration", name: "--gemfx-tilt3d-duration" },
  { id: "delay", name: "--gemfx-tilt3d-delay" },
  { id: "glarePosition", name: "--gemfx-tilt3d-glare-{x|y}" },
  { id: "glareOpacity", name: "--gemfx-tilt3d-glare-opacity" },
  { id: "glareColor", name: "--gemfx-tilt3d-glare-color" },
] as const;

export const tilt3DTokens = [{ id: "easingStandard", name: "--gemfx-easing-standard" }] as const;

export const tilt3DA11yIds = [
  "hidden",
  "reducedMotion",
  "ignoreReducedMotion",
  "nested",
  "pointerOnly",
  "touch",
  "vestibular",
] as const;
