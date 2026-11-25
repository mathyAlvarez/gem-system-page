import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

export function DurationGradientGlossy() {
  return (
    <div className="gg-demo">
      {[220, 800, 2000].map((duration) => (
        <GlossyTile key={duration} label={`duration={${duration}}`}>
          <GradientGlossy trigger="hover" duration={duration} className="gg-demo__host">
            <span className="gg-demo__target">{duration}ms</span>
          </GradientGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
