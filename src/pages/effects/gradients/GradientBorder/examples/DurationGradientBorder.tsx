import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

export function DurationGradientBorder() {
  return (
    <div className="gb-demo">
      {[1500, 4000, 10000].map((duration) => (
        <BorderTile key={duration} label={`duration={${duration}}`}>
          <GradientBorder duration={duration} thickness={3} className="gb-demo__host">
            <BorderTarget>{duration} ms</BorderTarget>
          </GradientBorder>
        </BorderTile>
      ))}
    </div>
  );
}
