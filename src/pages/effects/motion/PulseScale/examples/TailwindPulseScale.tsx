import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

type TailwindPulseScaleProps = {
  label: string;
};

export function TailwindPulseScale({ label }: TailwindPulseScaleProps) {
  return (
    <PulseTile>
      <PulseScale
        variant="ping"
        duration={1600}
        className="rounded-[var(--gem-radius-md)] [--gemfx-pulse-scale-ring-color:var(--gem-palette-tertiary-400)]"
      >
        <span className="pulse-demo__cta rounded-[var(--gem-radius-md)] bg-[var(--gem-palette-tertiary-400)]">
          {label}
        </span>
      </PulseScale>
    </PulseTile>
  );
}
