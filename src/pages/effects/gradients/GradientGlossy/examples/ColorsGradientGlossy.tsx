import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

const COLORS = [
  "var(--gem-palette-primary-500)",
  "var(--gem-palette-tertiary-400)",
  "#3b82f6",
  "tomato",
];

export function ColorsGradientGlossy() {
  return (
    <div className="gg-demo">
      {COLORS.map((color) => (
        <GlossyTile key={color} label={color}>
          <GradientGlossy color={color} className="gg-demo__host">
            <span className="gg-demo__swatch" />
          </GradientGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
