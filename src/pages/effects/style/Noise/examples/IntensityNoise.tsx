import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

export function IntensityNoise() {
  return (
    <div className="noise-demo">
      {(["sm", "md", "lg", 0.95] as const).map((intensity) => (
        <NoiseTile
          key={intensity}
          label={
            typeof intensity === "number" ? `intensity={${intensity}}` : `intensity="${intensity}"`
          }
        >
          <Noise intensity={intensity} className="noise-demo__host">
            <NoiseCard compact />
          </Noise>
        </NoiseTile>
      ))}
    </div>
  );
}
