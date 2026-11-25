import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

const durations = [900, 1400, 2200];

export function DurationPulseScale() {
  return (
    <div className="pulse-demo">
      {durations.map((duration) => (
        <PulseTile key={duration} label={`duration={${duration}}`}>
          <PulseScale duration={duration} className="pulse-demo__host">
            <span className="pulse-demo__cta">{duration} ms</span>
          </PulseScale>
        </PulseTile>
      ))}
    </div>
  );
}
