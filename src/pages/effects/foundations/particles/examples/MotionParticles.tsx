import { PARTICLE_MOTIONS } from "./demo.ts";
import { ParticleStage } from "./ParticleStage.tsx";
import "./particles-demo.css";

export function MotionParticles() {
  return (
    <div className="particles-demo__row">
      {PARTICLE_MOTIONS.map((motion) => (
        <div key={motion} className="particles-demo__item">
          <p className="particles-demo__label">{motion}</p>
          <ParticleStage kind="star" motion={motion} count={14} hint={motion} />
        </div>
      ))}
    </div>
  );
}
