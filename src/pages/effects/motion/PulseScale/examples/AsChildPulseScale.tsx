import { Button } from "@gem-org/gem-system";
import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

type AsChildPulseScaleProps = {
  label: string;
};

export function AsChildPulseScale({ label }: AsChildPulseScaleProps) {
  return (
    <PulseTile>
      <PulseScale asChild variant="breathe" trigger="hover">
        <Button size="lg">{label}</Button>
      </PulseScale>
    </PulseTile>
  );
}
