import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type TailwindNoiseProps = {
  title: string;
};

export function TailwindNoise({ title }: TailwindNoiseProps) {
  return (
    <NoiseTile>
      <Noise
        variant="static"
        className="rounded-[var(--gem-radius-2xl)] shadow-[var(--gem-shadow-lg)]"
        classNames={{ grain: "opacity-60" }}
      >
        <NoiseCard tone="dark">{title}</NoiseCard>
      </Noise>
    </NoiseTile>
  );
}
