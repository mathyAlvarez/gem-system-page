import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import { GLASS_COLORS } from "./demo.ts";
import "./glassmorphism-demo.css";

export function ColorGlassmorphism() {
  return (
    <div className="glass-demo">
      {Object.entries(GLASS_COLORS).map(([name, color]) => (
        <GlassScene key={name} label={`color="${color}"`} compact>
          <Glassmorphism variant="tinted" color={color} className="glass-demo__host">
            <GlassCopy title={name} />
          </Glassmorphism>
        </GlassScene>
      ))}
    </div>
  );
}
