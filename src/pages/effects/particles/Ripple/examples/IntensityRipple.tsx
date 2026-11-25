import { Ripple } from "@gem-org/gemffects/ripple";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

const INTENSITIES = ["sm", "md", "lg", 0.2, 0.95] as const;

export function IntensityRipple() {
  return (
    <div className="rl-demo">
      {INTENSITIES.map((intensity) => {
        const label =
          typeof intensity === "number" ? `intensity={${intensity}}` : `intensity="${intensity}"`;
        return (
          <RippleTile key={intensity} label={label}>
            <Ripple intensity={intensity} className="rl-demo__host">
              <span className="rl-demo__target">{intensity}</span>
            </Ripple>
          </RippleTile>
        );
      })}
    </div>
  );
}
