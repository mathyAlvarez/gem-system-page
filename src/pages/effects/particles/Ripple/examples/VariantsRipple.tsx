import { Ripple } from "@gem-org/gemffects/ripple";
import { RIPPLE_VARIANTS } from "./demo.ts";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

export function VariantsRipple() {
  return (
    <div className="rl-demo">
      {RIPPLE_VARIANTS.map((variant) => (
        <RippleTile key={variant} label={`variant="${variant}"`}>
          <Ripple
            variant={variant}
            duration={variant === "pulse" ? 900 : 600}
            className="rl-demo__host"
          >
            <span className="rl-demo__target">{variant}</span>
          </Ripple>
        </RippleTile>
      ))}
    </div>
  );
}
