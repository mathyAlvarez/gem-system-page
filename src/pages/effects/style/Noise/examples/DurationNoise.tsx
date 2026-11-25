import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

export function DurationNoise() {
  return (
    <div className="noise-demo">
      {[800, 2400, 6000].map((duration) => (
        <NoiseTile key={duration} label={`duration={${duration}}`}>
          <Noise variant="film" duration={duration} intensity="lg" className="noise-demo__host">
            <NoiseCard compact />
          </Noise>
        </NoiseTile>
      ))}
    </div>
  );
}
