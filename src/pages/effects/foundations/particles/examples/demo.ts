import {
  createParticle,
  randomBetween,
  resolveParticlePalette,
  type Particle,
  type ParticleKind,
  type ParticleMotion,
} from "@gem-org/gemffects/particles";

export const PARTICLE_MOTIONS = [
  "burst",
  "rain",
  "rip",
] as const satisfies readonly ParticleMotion[];
export const PARTICLE_EMITS = ["click", "always"] as const;
export type ParticleEmit = (typeof PARTICLE_EMITS)[number];

type IdCounter = { current: number };

/** Radial burst from a point (pointer position or the stage center). */
export function spawnBurst(
  originX: number,
  originY: number,
  count: number,
  kind: ParticleKind,
  nextId: IdCounter,
): Particle[] {
  const palette = resolveParticlePalette(kind, undefined, undefined);
  const spread = kind === "confetti" ? 88 : 72;

  return Array.from({ length: count }, (_, index) => {
    nextId.current += 1;
    const angle = (Math.PI * 2 * index) / count + randomBetween(-0.28, 0.28);
    const distance = spread * randomBetween(0.45, 1);
    return createParticle({
      id: nextId.current,
      kind,
      x: originX,
      y: originY,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance + (kind === "confetti" ? spread * 0.28 : spread * 0.08),
      palette,
      index,
      delay: randomBetween(0, 70),
    });
  });
}

/** Particles that fall from the top edge across the whole stage. */
export function spawnRain(
  width: number,
  height: number,
  count: number,
  kind: ParticleKind,
  nextId: IdCounter,
): Particle[] {
  const palette = resolveParticlePalette(kind, undefined, undefined);

  return Array.from({ length: count }, (_, index) => {
    nextId.current += 1;
    return createParticle({
      id: nextId.current,
      kind,
      x: randomBetween(8, Math.max(16, width - 8)),
      y: randomBetween(-12, 8),
      dx: 36 * randomBetween(-1, 1),
      dy: height + randomBetween(16, 40),
      palette,
      index,
      delay: randomBetween(0, 90),
      heading: kind === "spark" ? randomBetween(-8, 8) : randomBetween(-28, 28),
    });
  });
}
