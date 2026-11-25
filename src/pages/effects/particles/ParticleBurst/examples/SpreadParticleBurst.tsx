import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

export function SpreadParticleBurst() {
  return (
    <div className="pb-demo">
      {[40, 88, 160].map((spread) => (
        <BurstTile key={spread} label={`spread={${spread}}`}>
          <ParticleBurst spread={spread}>
            <span className="pb-demo__target">{spread}px</span>
          </ParticleBurst>
        </BurstTile>
      ))}
    </div>
  );
}
