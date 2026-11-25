import { Noise } from "@gem-org/gemffects/noise";
import { NoiseImage, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type ImageNoiseProps = {
  alt: string;
};

export function ImageNoise({ alt }: ImageNoiseProps) {
  return (
    <NoiseTile>
      <Noise variant="film" intensity="lg" className="noise-demo__host">
        <NoiseImage alt={alt} />
      </Noise>
    </NoiseTile>
  );
}
