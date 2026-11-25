import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

type BadgePulseScaleProps = {
  label: string;
};

export function BadgePulseScale({ label }: BadgePulseScaleProps) {
  return (
    <PulseTile>
      <PulseScale
        variant="pop"
        intensity="lg"
        duration={2400}
        className="pulse-demo__host [--gemfx-pulse-scale-ring-color:var(--gem-palette-error-400)]"
        ring
      >
        <span className="pulse-demo__badge" role="status" aria-label={label}>
          3
        </span>
      </PulseScale>
    </PulseTile>
  );
}
