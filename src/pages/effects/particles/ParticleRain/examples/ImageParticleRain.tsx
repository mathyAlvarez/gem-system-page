import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import "./particle-rain-demo.css";

type ImageParticleRainProps = {
  alt: string;
};

export function ImageParticleRain({ alt }: ImageParticleRainProps) {
  return (
    <ParticleRain variant="star" intensity="sm" className="pr-demo__media">
      <img src="/gem-org-favicon.png" alt={alt} className="pr-demo__image" />
    </ParticleRain>
  );
}
