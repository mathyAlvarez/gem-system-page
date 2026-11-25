import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import "./particle-burst-demo.css";

type ImageParticleBurstProps = {
  alt: string;
};

export function ImageParticleBurst({ alt }: ImageParticleBurstProps) {
  return (
    <ParticleBurst variant="star" intensity="lg" className="pb-demo__media">
      <img src="/gem-org-favicon.png" alt={alt} className="pb-demo__image" />
    </ParticleBurst>
  );
}
