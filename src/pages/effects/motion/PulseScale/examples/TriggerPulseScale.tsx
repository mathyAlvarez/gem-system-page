import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

type TriggerPulseScaleProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerPulseScale({ hoverLabel, clickLabel }: TriggerPulseScaleProps) {
  return (
    <div className="pulse-demo">
      <PulseTile label='trigger="hover"'>
        <PulseScale trigger="hover" className="pulse-demo__host">
          <span className="pulse-demo__cta">{hoverLabel}</span>
        </PulseScale>
      </PulseTile>
      <PulseTile label='trigger="click"'>
        <PulseScale trigger="click" className="pulse-demo__host">
          <span className="pulse-demo__cta">{clickLabel}</span>
        </PulseScale>
      </PulseTile>
    </div>
  );
}
