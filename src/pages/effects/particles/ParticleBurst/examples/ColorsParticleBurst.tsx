import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

const ocean = [
  "var(--gem-palette-primary-300)",
  "var(--gem-palette-primary-500)",
  "var(--gem-palette-info-500)",
];

export function ColorsParticleBurst() {
  return (
    <div className="pb-demo">
      <BurstTile label="colors={ocean}">
        <ParticleBurst colors={ocean}>
          <span className="pb-demo__target">colors</span>
        </ParticleBurst>
      </BurstTile>
      <BurstTile label='color="var(--gem-palette-secondary-400)"'>
        <ParticleBurst variant="star" color="var(--gem-palette-secondary-400)">
          <span className="pb-demo__target">color</span>
        </ParticleBurst>
      </BurstTile>
    </div>
  );
}
