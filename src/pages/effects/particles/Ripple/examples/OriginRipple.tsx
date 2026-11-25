import { Ripple } from "@gem-org/gemffects/ripple";
import { RIPPLE_ORIGINS } from "./demo.ts";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

export function OriginRipple() {
  return (
    <div className="rl-demo">
      {RIPPLE_ORIGINS.map((origin) => (
        <RippleTile key={origin} label={`origin="${origin}"`}>
          <Ripple origin={origin} className="rl-demo__host">
            <span className="rl-demo__tile" />
          </Ripple>
        </RippleTile>
      ))}
    </div>
  );
}
