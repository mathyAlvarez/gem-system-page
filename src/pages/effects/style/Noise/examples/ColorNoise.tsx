import { Noise } from "@gem-org/gemffects/noise";
import { NoiseCard, NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

const COLORS = [
  { label: "default", value: undefined },
  { label: "primary-300", value: "var(--gem-palette-primary-300)" },
  { label: "tertiary-300", value: "var(--gem-palette-tertiary-300)" },
];

export function ColorNoise() {
  return (
    <div className="noise-demo">
      {COLORS.map((color) => (
        <NoiseTile key={color.label} label={color.label}>
          <Noise color={color.value} intensity="lg" className="noise-demo__host">
            <NoiseCard tone="dark" compact />
          </Noise>
        </NoiseTile>
      ))}
    </div>
  );
}
