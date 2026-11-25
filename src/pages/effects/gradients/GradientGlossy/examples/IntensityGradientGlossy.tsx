import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

export function IntensityGradientGlossy() {
  return (
    <div className="gg-demo">
      {(["sm", "md", "lg", 1] as const).map((intensity) => (
        <GlossyTile
          key={intensity}
          label={
            typeof intensity === "number" ? `intensity={${intensity}}` : `intensity="${intensity}"`
          }
        >
          <GradientGlossy intensity={intensity} variant="deep" className="gg-demo__host">
            <span className="gg-demo__swatch" />
          </GradientGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
