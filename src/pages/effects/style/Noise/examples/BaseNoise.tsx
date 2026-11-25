import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type BaseNoiseProps = {
  title: string;
};

export function BaseNoise({ title }: BaseNoiseProps) {
  return (
    <NoiseTile>
      <Noise className="noise-demo__host">
        <NoiseCard>{title}</NoiseCard>
      </Noise>
    </NoiseTile>
  );
}
