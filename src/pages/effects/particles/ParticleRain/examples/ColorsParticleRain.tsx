import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { RainTile } from "./RainTile.tsx";
import "./particle-rain-demo.css";

const ocean = [
  "var(--gem-palette-primary-300)",
  "var(--gem-palette-primary-500)",
  "var(--gem-palette-info-500)",
];

export function ColorsParticleRain() {
  return (
    <div className="pr-demo">
      <RainTile label="colors={ocean}">
        <ParticleRain colors={ocean} className="pr-demo__host pr-demo__host--sm">
          <p className="pr-demo__copy">colors</p>
        </ParticleRain>
      </RainTile>
      <RainTile label='color="var(--gem-palette-tertiary-400)"'>
        <ParticleRain
          variant="light"
          color="var(--gem-palette-tertiary-400)"
          className="pr-demo__host pr-demo__host--sm"
        >
          <p className="pr-demo__copy">color</p>
        </ParticleRain>
      </RainTile>
    </div>
  );
}
