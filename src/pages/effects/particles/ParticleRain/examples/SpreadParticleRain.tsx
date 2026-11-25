import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

export function SpreadParticleRain() {
  return (
    <div className="pr-demo">
      {[0, 36, 96].map((spread) => (
        <RainTile key={spread} label={`spread={${spread}}`}>
          <ParticleRain spread={spread} variant="spark" className="pr-demo__host pr-demo__host--sm">
            <p className="pr-demo__copy">{spread}px</p>
          </ParticleRain>
        </RainTile>
      ))}
    </div>
  );
}
