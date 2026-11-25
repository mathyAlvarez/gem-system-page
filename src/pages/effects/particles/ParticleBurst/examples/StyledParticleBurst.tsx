import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import "./particle-burst-demo.css";
import "./particle-burst-overrides.css";

type StyledParticleBurstProps = {
  label: string;
};

const bubbles = [
  "var(--gem-palette-info-500)",
  "var(--gem-palette-primary-300)",
  "var(--gem-palette-neutral-0)",
];

export function StyledParticleBurst({ label }: StyledParticleBurstProps) {
  return (
    <div className="pb-demo__stage">
      <ParticleBurst count={14} spread={120} colors={bubbles} className="pb-bubbles">
        <span className="pb-demo__target">{label}</span>
      </ParticleBurst>
    </div>
  );
}
