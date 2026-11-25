import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

const durations = [120, 280, 900];

export function DurationGlassmorphism() {
  return (
    <div className="glass-demo">
      {durations.map((duration) => (
        <GlassScene key={duration} label={`duration={${duration}}`} compact>
          <Glassmorphism trigger="hover" duration={duration} className="glass-demo__host">
            <GlassCopy title={`${duration}ms`} />
          </Glassmorphism>
        </GlassScene>
      ))}
    </div>
  );
}
