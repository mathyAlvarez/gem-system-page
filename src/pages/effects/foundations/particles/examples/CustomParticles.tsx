import { ParticleStage } from "./ParticleStage.tsx";
import "./particles-demo.css";

type CustomParticlesProps = {
  hint: string;
};

export function CustomParticles({ hint }: CustomParticlesProps) {
  return (
    <ParticleStage
      kind="star"
      motion="burst"
      count={10}
      hint={hint}
      renderParticle={(particle) => (
        <span className="particles-demo__glyph" style={{ color: particle.color }}>
          ✦
        </span>
      )}
    />
  );
}
