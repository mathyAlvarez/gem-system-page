import { Rip } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function GapRip() {
  return (
    <div className="rp-demo">
      {[6, 12, 22].map((gap) => (
        <RipTile key={gap} label={`gap={${gap}}`}>
          <Rip variant="claw" gap={gap} trigger="click" className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{gap}px</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
