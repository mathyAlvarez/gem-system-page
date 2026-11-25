import { Button } from "@gem-org/gem-system";
import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import "./particle-rain-demo.css";

type AsChildParticleRainProps = {
  label: string;
};

export function AsChildParticleRain({ label }: AsChildParticleRainProps) {
  return (
    <ParticleRain asChild trigger="hover" variant="light" intensity="sm">
      <Button variant="primary" className="pr-demo__button">
        {label}
      </Button>
    </ParticleRain>
  );
}
