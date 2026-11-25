export const particleLayerProps = [
  { name: "particles", type: "readonly Particle[]", defaultValue: "—" },
  { name: "motion", type: '"burst" | "rain" | "rip"', defaultValue: "—" },
  { name: "durationMs", type: "number", defaultValue: "700" },
  { name: "isPaused", type: "boolean", defaultValue: "false" },
  { name: "renderParticle", type: "(particle: Particle) => ReactNode", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "particleClassName", type: "string", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
] as const;

export const particleFieldOptions = [
  { name: "maxLive", type: "number", defaultValue: "—" },
] as const;

export const particleFieldResult = [
  { name: "particles", type: "Particle[]" },
  { name: "spawn", type: "(items: readonly Particle[], lifetimeMs: number) => void" },
  { name: "clear", type: "() => void" },
  { name: "getLiveCount", type: "() => number" },
] as const;

export const particleHelpers = [
  { name: "createParticle", signature: "(input: CreateParticleInput) => Particle" },
  {
    name: "resolveParticlePalette",
    signature: "(kind, colors?: readonly string[], color?: string) => readonly string[]",
  },
  { name: "particleSize", signature: "(kind) => { width: number; height: number }" },
  { name: "particleHeading", signature: "(kind, dx: number, dy: number) => number" },
  { name: "particleSpin", signature: "(kind) => number" },
  { name: "pickColor", signature: "(palette: readonly string[], index: number) => string" },
  { name: "pickParticleKind", signature: "(kinds?: readonly ParticleKind[]) => ParticleKind" },
  { name: "randomBetween", signature: "(min: number, max: number) => number" },
  { name: "PARTICLE_KINDS", signature: "readonly ParticleKind[]" },
  { name: "PALETTES", signature: "CONFETTI_COLORS | SPARK_COLORS | STAR_COLORS | LIGHT_COLORS" },
] as const;

export const particleCssClasses = [
  { id: "layer", name: ".gemfx-particle-layer" },
  { id: "layerMotion", name: ".gemfx-particle-layer--{burst|rain|rip}" },
  { id: "layerPaused", name: ".gemfx-particle-layer--paused" },
  { id: "particle", name: ".gemfx-particle" },
  { id: "particleKind", name: ".gemfx-particle--{confetti|spark|star|light}" },
  { id: "particleCustom", name: ".gemfx-particle--custom" },
] as const;

export const particleCssVariables = [
  { id: "duration", name: "--gemfx-particle-duration" },
  { id: "easing", name: "--gemfx-particle-easing" },
  { id: "endScale", name: "--gemfx-particle-end-scale" },
  { id: "originY", name: "--gemfx-particle-oy" },
  { id: "position", name: "--gemfx-particle-{x|y}" },
  { id: "offset", name: "--gemfx-particle-{dx|dy}" },
  { id: "rotation", name: "--gemfx-particle-{heading|spin}" },
  { id: "size", name: "--gemfx-particle-{w|h}" },
  { id: "color", name: "--gemfx-particle-color" },
  { id: "delay", name: "--gemfx-particle-delay" },
] as const;

export const particleA11yIds = ["hidden", "reducedMotion", "emitter", "control", "budget"] as const;
