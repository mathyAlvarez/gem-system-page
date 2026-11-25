import { Noise } from "@gem-org/gemffects/noise";
import { NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type AsChildNoiseProps = {
  label: string;
};

export function AsChildNoise({ label }: AsChildNoiseProps) {
  return (
    <NoiseTile>
      <Noise asChild intensity="lg">
        <button type="button" className="noise-demo__button">
          {label}
        </button>
      </Noise>
    </NoiseTile>
  );
}
