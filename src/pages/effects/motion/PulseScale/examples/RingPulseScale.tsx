import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

export function RingPulseScale() {
  return (
    <div className="pulse-demo">
      <PulseTile label='variant="heartbeat" ring'>
        <PulseScale ring className="pulse-demo__host">
          <span className="pulse-demo__cta">heartbeat + ring</span>
        </PulseScale>
      </PulseTile>
      <PulseTile label='variant="ping" ring={false}'>
        <PulseScale variant="ping" duration={1600} ring={false} className="pulse-demo__host">
          <span className="pulse-demo__cta">ping</span>
        </PulseScale>
      </PulseTile>
    </div>
  );
}
