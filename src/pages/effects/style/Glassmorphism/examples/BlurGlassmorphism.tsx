import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

const blurs = [6, 16, 36];

export function BlurGlassmorphism() {
  return (
    <div className="glass-demo">
      {blurs.map((blur) => (
        <GlassScene key={blur} label={`blur={${blur}}`} compact>
          <Glassmorphism blur={blur} className="glass-demo__host">
            <GlassCopy title={`${blur}px`} />
          </Glassmorphism>
        </GlassScene>
      ))}
    </div>
  );
}
