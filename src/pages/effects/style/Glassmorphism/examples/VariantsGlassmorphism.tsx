import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import { GLASS_COLORS, GLASS_VARIANTS } from "./demo.ts";
import "./glassmorphism-demo.css";

export function VariantsGlassmorphism() {
  return (
    <div className="glass-demo">
      {GLASS_VARIANTS.map((variant) => (
        <GlassScene key={variant} label={`variant="${variant}"`} compact>
          <Glassmorphism
            variant={variant}
            color={variant === "tinted" ? GLASS_COLORS.primary : undefined}
            className="glass-demo__host"
          >
            <GlassCopy title={variant} />
          </Glassmorphism>
        </GlassScene>
      ))}
    </div>
  );
}
