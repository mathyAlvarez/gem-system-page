import { Rip } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function LinesRip() {
  return (
    <div className="rp-demo">
      {[1, 3, 5].map((lines) => (
        <RipTile key={lines} label={`lines={${lines}}`}>
          <Rip lines={lines} trigger="click" className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{lines}</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
