import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

const saturations = [40, 100, 240];

export function SaturateGlassmorphism() {
  return (
    <div className="glass-demo">
      {saturations.map((saturate) => (
        <GlassScene key={saturate} label={`saturate={${saturate}}`} compact>
          <Glassmorphism saturate={saturate} variant="clear" className="glass-demo__host">
            <GlassCopy title={`${saturate}%`} />
          </Glassmorphism>
        </GlassScene>
      ))}
    </div>
  );
}
