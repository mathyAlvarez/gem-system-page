import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GLOSSY_VARIANTS } from "./demo.ts";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

export function VariantsGradientGlossy() {
  return (
    <div className="gg-demo">
      {GLOSSY_VARIANTS.map((variant) => (
        <GlossyTile key={variant} label={`variant="${variant}"`}>
          <GradientGlossy variant={variant} className="gg-demo__host">
            <span className="gg-demo__target">{variant}</span>
          </GradientGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
