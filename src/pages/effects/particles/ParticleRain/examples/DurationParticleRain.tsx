import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

export function DurationParticleRain() {
  return (
    <div className="pr-demo">
      {[900, 1800, 2800].map((duration) => (
        <RainTile key={duration} label={`duration={${duration}}`}>
          <ParticleRain
            duration={duration}
            intensity="sm"
            className="pr-demo__host pr-demo__host--sm"
          >
            <p className="pr-demo__copy">{duration} ms</p>
          </ParticleRain>
        </RainTile>
      ))}
    </div>
  );
}
