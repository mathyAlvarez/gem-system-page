import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import "./particle-rain-demo.css";

type BaseParticleRainProps = {
  label: string;
};

export function BaseParticleRain({ label }: BaseParticleRainProps) {
  return (
    <ParticleRain className="pr-demo__host">
      <p className="pr-demo__copy">{label}</p>
    </ParticleRain>
  );
}
