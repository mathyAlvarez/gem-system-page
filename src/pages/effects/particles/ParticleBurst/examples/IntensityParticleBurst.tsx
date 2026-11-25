import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

export function IntensityParticleBurst() {
  return (
    <div className="pb-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <BurstTile key={intensity} label={`intensity="${intensity}"`}>
          <ParticleBurst intensity={intensity}>
            <span className="pb-demo__target">{intensity}</span>
          </ParticleBurst>
        </BurstTile>
      ))}
    </div>
  );
}
