import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";
import "./pulse-scale-overrides.css";

type StyledPulseScaleProps = {
  label: string;
};

export function StyledPulseScale({ label }: StyledPulseScaleProps) {
  return (
    <PulseTile>
      <PulseScale variant="ping" duration={2000} intensity="lg" className="pulse-sonar">
        <span className="pulse-demo__cta">{label}</span>
      </PulseScale>
    </PulseTile>
  );
}
