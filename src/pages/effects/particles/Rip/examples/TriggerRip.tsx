import { Rip } from "@gem-org/gemffects/rip";
import { RIP_TRIGGERS } from "./demo.ts";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function TriggerRip() {
  return (
    <div className="rp-demo">
      {RIP_TRIGGERS.map((trigger) => (
        <RipTile key={trigger} label={`trigger="${trigger}"`}>
          <Rip
            trigger={trigger}
            variant={trigger === "always" ? "slash" : "gouge"}
            className="rp-demo__host"
          >
            <div className="rp-demo__target rp-demo__target--sm">{trigger}</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
