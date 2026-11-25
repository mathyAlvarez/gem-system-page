import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityGlassmorphism() {
  return (
    <div className="glass-demo">
      {intensities.map((intensity) => (
        <GlassScene
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
          compact
        >
          <Glassmorphism intensity={intensity} className="glass-demo__host">
            <GlassCopy title={String(intensity)} />
          </Glassmorphism>
        </GlassScene>
      ))}
    </div>
  );
}
