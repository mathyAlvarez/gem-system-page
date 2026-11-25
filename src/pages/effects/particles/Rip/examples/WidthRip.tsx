import { Rip } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function WidthRip() {
  return (
    <div className="rp-demo">
      {[6, 16, 32].map((width) => (
        <RipTile key={width} label={`width={${width}}`}>
          <Rip width={width} trigger="click" className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{width}px</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
