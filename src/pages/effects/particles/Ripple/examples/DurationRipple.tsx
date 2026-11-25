import { Ripple } from "@gem-org/gemffects/ripple";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

export function DurationRipple() {
  return (
    <div className="rl-demo">
      {[300, 600, 1200].map((duration) => (
        <RippleTile key={duration} label={`duration={${duration}}`}>
          <Ripple duration={duration} className="rl-demo__host">
            <span className="rl-demo__target">{duration} ms</span>
          </Ripple>
        </RippleTile>
      ))}
    </div>
  );
}
