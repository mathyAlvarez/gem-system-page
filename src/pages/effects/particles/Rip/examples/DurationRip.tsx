import { Rip } from "@gem-org/gemffects/rip";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function DurationRip() {
  return (
    <div className="rp-demo">
      {[400, 700, 1100].map((duration) => (
        <RipTile key={duration} label={`duration={${duration}}`}>
          <Rip duration={duration} variant="slash" trigger="click" className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{duration} ms</div>
          </Rip>
        </RipTile>
      ))}
      <RipTile label="delay={300}">
        <Rip delay={300} variant="slash" trigger="click" className="rp-demo__host">
          <div className="rp-demo__target rp-demo__target--sm">+300 ms</div>
        </Rip>
      </RipTile>
    </div>
  );
}
