import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

export function IntensityGradientBorder() {
  return (
    <div className="gb-demo">
      {(["sm", "md", "lg"] as const).map((intensity) => (
        <BorderTile key={intensity} label={`intensity="${intensity}"`}>
          <GradientBorder intensity={intensity} thickness={3} className="gb-demo__host">
            <BorderTarget>{intensity}</BorderTarget>
          </GradientBorder>
        </BorderTile>
      ))}
    </div>
  );
}
