import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RAIN_VARIANTS } from "./demo.ts";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

export function VariantsParticleRain() {
  return (
    <div className="pr-demo">
      {RAIN_VARIANTS.map((variant) => (
        <RainTile key={variant} label={`variant="${variant}"`}>
          <ParticleRain variant={variant} className="pr-demo__host pr-demo__host--sm">
            <p className="pr-demo__copy">{variant}</p>
          </ParticleRain>
        </RainTile>
      ))}
    </div>
  );
}
