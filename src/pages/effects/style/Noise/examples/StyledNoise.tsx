import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";
import "./noise-overrides.css";

type StyledNoiseProps = {
  title: string;
};

export function StyledNoise({ title }: StyledNoiseProps) {
  return (
    <NoiseTile>
      <Noise variant="static" intensity="lg" className="noise-crt">
        <NoiseCard tone="dark">{title}</NoiseCard>
      </Noise>
    </NoiseTile>
  );
}
