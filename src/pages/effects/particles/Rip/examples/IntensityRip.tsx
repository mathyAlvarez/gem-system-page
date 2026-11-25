import { Rip } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function IntensityRip() {
  return (
    <div className="rp-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <RipTile key={intensity} label={`intensity="${intensity}"`}>
          <Rip intensity={intensity} className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{intensity}</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
