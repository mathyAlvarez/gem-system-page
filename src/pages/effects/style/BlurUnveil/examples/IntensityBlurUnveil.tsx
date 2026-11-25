import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityBlurUnveil() {
  return (
    <div className="unveil-demo">
      {intensities.map((intensity) => (
        <UnveilTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <BlurUnveil trigger="hover" intensity={intensity} className="unveil-demo__host">
            <UnveilImage compact />
          </BlurUnveil>
        </UnveilTile>
      ))}
    </div>
  );
}
