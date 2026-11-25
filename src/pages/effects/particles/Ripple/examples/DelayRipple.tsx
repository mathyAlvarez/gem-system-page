import { Ripple } from "@gem-org/gemffects/ripple";
import { RippleTile } from "./RippleTile.tsx";
import "./ripple-demo.css";

export function DelayRipple() {
  return (
    <div className="rl-demo">
      {[0, 150, 400].map((delay) => (
        <RippleTile key={delay} label={`delay={${delay}}`}>
          <Ripple delay={delay} className="rl-demo__host">
            <span className="rl-demo__target">{delay} ms</span>
          </Ripple>
        </RippleTile>
      ))}
    </div>
  );
}
