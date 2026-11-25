import { PARTICLE_KINDS } from "@gem-org/gemffects/particles";
import { ParticleStage } from "./ParticleStage.tsx";
import "./particles-demo.css";

export function KindParticles() {
  return (
    <div className="particles-demo__row">
      {PARTICLE_KINDS.map((kind) => (
        <div key={kind} className="particles-demo__item">
          <p className="particles-demo__label">{kind}</p>
          <ParticleStage kind={kind} motion="burst" count={14} hint={kind} />
        </div>
      ))}
    </div>
  );
}
