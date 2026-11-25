import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import { BURST_VARIANTS } from "./demo.ts";
import "./particle-burst-demo.css";

export function VariantsParticleBurst() {
  return (
    <div className="pb-demo">
      {BURST_VARIANTS.map((variant) => (
        <BurstTile key={variant} label={`variant="${variant}"`}>
          <ParticleBurst variant={variant}>
            <span className="pb-demo__target">{variant}</span>
          </ParticleBurst>
        </BurstTile>
      ))}
    </div>
  );
}
