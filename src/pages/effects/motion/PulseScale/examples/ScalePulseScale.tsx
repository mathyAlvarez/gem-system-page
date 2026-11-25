import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

const scales = [1.02, 1.2, 1.4];

export function ScalePulseScale() {
  return (
    <div className="pulse-demo">
      {scales.map((scale) => (
        <PulseTile key={scale} label={`scale={${scale}}`}>
          <PulseScale variant="breathe" duration={1800} scale={scale} className="pulse-demo__host">
            <span className="pulse-demo__cta">{scale}</span>
          </PulseScale>
        </PulseTile>
      ))}
    </div>
  );
}
