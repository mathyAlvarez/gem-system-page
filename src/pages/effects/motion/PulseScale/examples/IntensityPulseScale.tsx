import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityPulseScale() {
  return (
    <div className="pulse-demo">
      {intensities.map((intensity) => (
        <PulseTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <PulseScale
            variant="ping"
            duration={1600}
            intensity={intensity}
            className="pulse-demo__host"
          >
            <span className="pulse-demo__cta">{intensity}</span>
          </PulseScale>
        </PulseTile>
      ))}
    </div>
  );
}
