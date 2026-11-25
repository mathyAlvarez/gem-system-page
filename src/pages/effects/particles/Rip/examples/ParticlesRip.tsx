import { Rip } from "@gem-org/gemffects/rip";
import { RIP_PARTICLES } from "./demo.ts";
import { RipTile } from "./RipTile.tsx";
import "./rip-demo.css";

export function ParticlesRip() {
  return (
    <div className="rp-demo">
      {RIP_PARTICLES.map((particle) => (
        <RipTile key={particle} label={`particle="${particle}"`}>
          <Rip particle={particle} variant="slash" trigger="click" className="rp-demo__host">
            <div className="rp-demo__target rp-demo__target--sm">{particle}</div>
          </Rip>
        </RipTile>
      ))}
    </div>
  );
}
