import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import "./particle-rain-demo.css";
import "./particle-rain-overrides.css";

type StyledParticleRainProps = {
  label: string;
};

const drops = ["var(--gem-palette-info-500)", "var(--gem-palette-primary-300)"];

export function StyledParticleRain({ label }: StyledParticleRainProps) {
  return (
    <ParticleRain
      variant="spark"
      spread={0}
      count={3}
      colors={drops}
      className="pr-demo__host pr-drops"
    >
      <p className="pr-demo__copy">{label}</p>
    </ParticleRain>
  );
}
