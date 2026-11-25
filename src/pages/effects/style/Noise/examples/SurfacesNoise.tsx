import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

export function SurfacesNoise() {
  return (
    <div className="noise-demo">
      {(["dark", "mid", "light"] as const).map((tone) => (
        <NoiseTile key={tone} label={tone}>
          <Noise intensity="lg" className="noise-demo__host">
            <NoiseCard tone={tone} compact>
              {tone}
            </NoiseCard>
          </Noise>
        </NoiseTile>
      ))}
    </div>
  );
}
