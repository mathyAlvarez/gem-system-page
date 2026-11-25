import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import { PULSE_VARIANT_DURATIONS, PULSE_VARIANTS } from "./demo.ts";
import "./pulse-scale-demo.css";

export function VariantsPulseScale() {
  return (
    <div className="pulse-demo">
      {PULSE_VARIANTS.map((variant) => (
        <PulseTile key={variant} label={`variant="${variant}"`}>
          <PulseScale
            variant={variant}
            duration={PULSE_VARIANT_DURATIONS[variant]}
            className="pulse-demo__host"
          >
            <span className="pulse-demo__cta">{variant}</span>
          </PulseScale>
        </PulseTile>
      ))}
    </div>
  );
}
