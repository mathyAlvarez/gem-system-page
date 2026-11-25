import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type TriggerNoiseProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerNoise({ hoverLabel, clickLabel }: TriggerNoiseProps) {
  return (
    <div className="noise-demo">
      <NoiseTile label='trigger="hover"'>
        <Noise trigger="hover" intensity="lg" className="noise-demo__host">
          <NoiseCard compact>{hoverLabel}</NoiseCard>
        </Noise>
      </NoiseTile>
      <NoiseTile label='trigger="click"'>
        <Noise trigger="click" intensity="lg" className="noise-demo__host">
          <NoiseCard compact>{clickLabel}</NoiseCard>
        </Noise>
      </NoiseTile>
    </div>
  );
}
