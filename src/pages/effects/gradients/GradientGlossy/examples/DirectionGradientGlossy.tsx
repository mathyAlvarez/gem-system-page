import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GLOSSY_DIRECTIONS } from "./demo.ts";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

export function DirectionGradientGlossy() {
  return (
    <div className="gg-demo">
      {GLOSSY_DIRECTIONS.map((direction) => (
        <GlossyTile key={direction} label={`direction="${direction}"`}>
          <GradientGlossy direction={direction} variant="deep" className="gg-demo__host">
            <span className="gg-demo__target">{direction}</span>
          </GradientGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
