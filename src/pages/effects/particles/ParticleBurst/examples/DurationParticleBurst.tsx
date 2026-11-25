import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

export function DurationParticleBurst() {
  return (
    <div className="pb-demo">
      {[500, 900, 1400].map((duration) => (
        <BurstTile key={duration} label={`duration={${duration}}`}>
          <ParticleBurst duration={duration}>
            <span className="pb-demo__target">{duration} ms</span>
          </ParticleBurst>
        </BurstTile>
      ))}
      <BurstTile label="delay={300}">
        <ParticleBurst delay={300}>
          <span className="pb-demo__target">+300 ms</span>
        </ParticleBurst>
      </BurstTile>
    </div>
  );
}
