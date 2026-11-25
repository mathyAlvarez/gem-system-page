import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

export function IntensityParticleRain() {
  return (
    <div className="pr-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <RainTile key={intensity} label={`intensity="${intensity}"`}>
          <ParticleRain intensity={intensity} className="pr-demo__host pr-demo__host--sm">
            <p className="pr-demo__copy">{intensity}</p>
          </ParticleRain>
        </RainTile>
      ))}
      <RainTile label={`intensity="lg" count={40}`}>
        <ParticleRain intensity="lg" count={40} className="pr-demo__host pr-demo__host--sm">
          <p className="pr-demo__copy">40</p>
        </ParticleRain>
      </RainTile>
    </div>
  );
}
