import { Rip } from "@gem-org/gemffects/rip";
import { RIP_VARIANTS } from "./demo.ts";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function VariantsRip() {
  return (
    <div className="rp-demo">
      {RIP_VARIANTS.map((variant) => (
        <RipTile key={variant} label={`variant="${variant}"`}>
          <Rip variant={variant} trigger="click" className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{variant}</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
