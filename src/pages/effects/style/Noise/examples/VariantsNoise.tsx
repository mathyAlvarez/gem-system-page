import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

export function VariantsNoise() {
  return (
    <div className="noise-demo">
      {(["grain", "film", "static"] as const).map((variant) => (
        <NoiseTile key={variant} label={`variant="${variant}"`}>
          <Noise variant={variant} intensity="lg" className="noise-demo__host">
            <NoiseCard compact>{variant}</NoiseCard>
          </Noise>
        </NoiseTile>
      ))}
    </div>
  );
}
