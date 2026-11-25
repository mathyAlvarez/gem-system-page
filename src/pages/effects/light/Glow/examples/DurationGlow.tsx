import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

const durations = [1200, 2400, 4000];

export function DurationGlow() {
  return (
    <div className="glow-demo">
      {durations.map((duration) => (
        <GlowTile key={duration} label={`duration={${duration}}`}>
          <Glow duration={duration} className="glow-demo__host">
            <span className="glow-demo__target">{duration} ms</span>
          </Glow>
        </GlowTile>
      ))}
    </div>
  );
}
