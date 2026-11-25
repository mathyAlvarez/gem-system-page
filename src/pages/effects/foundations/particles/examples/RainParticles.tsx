import { ParticleStage } from "./ParticleStage.tsx";

type RainParticlesProps = {
  hint: string;
};

export function RainParticles({ hint }: RainParticlesProps) {
  return (
    <ParticleStage
      kind="light"
      motion="rain"
      emit="always"
      durationMs={1800}
      count={5}
      hint={hint}
      wide
    />
  );
}
