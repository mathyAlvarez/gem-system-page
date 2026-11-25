import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

export function CountParticleRain() {
  return (
    <div className="pr-demo">
      {[1, 2, 4].map((count) => (
        <RainTile key={count} label={`count={${count}}`}>
          <ParticleRain count={count} className="pr-demo__host pr-demo__host--sm">
            <p className="pr-demo__copy">{count}</p>
          </ParticleRain>
        </RainTile>
      ))}
    </div>
  );
}
