import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import { BurstTile } from "./BurstTile.tsx";
import "./particle-burst-demo.css";

export function CountParticleBurst() {
  return (
    <div className="pb-demo">
      {[8, 18, 36].map((count) => (
        <BurstTile key={count} label={`count={${count}}`}>
          <ParticleBurst count={count}>
            <span className="pb-demo__target">{count}</span>
          </ParticleBurst>
        </BurstTile>
      ))}
    </div>
  );
}
