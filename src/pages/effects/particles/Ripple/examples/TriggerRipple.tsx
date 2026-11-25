import { Ripple } from "@gem-org/gemffects/ripple";
import { RIPPLE_TRIGGERS } from "./demo.ts";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

export function TriggerRipple() {
  return (
    <div className="rl-demo">
      {RIPPLE_TRIGGERS.map((trigger) => (
        <RippleTile key={trigger} label={`trigger="${trigger}"`}>
          <Ripple trigger={trigger} tabIndex={0} className="rl-demo__host">
            <span className="rl-demo__tile" />
          </Ripple>
        </RippleTile>
      ))}
    </div>
  );
}
