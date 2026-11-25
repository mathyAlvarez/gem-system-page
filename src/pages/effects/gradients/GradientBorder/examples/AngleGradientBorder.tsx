import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

export function AngleGradientBorder() {
  return (
    <div className="gb-demo">
      {[0, 120, 240].map((angle) => (
        <BorderTile key={angle} label={`angle={${angle}}`}>
          <GradientBorder variant="static" angle={angle} thickness={3} className="gb-demo__host">
            <BorderTarget>{angle}°</BorderTarget>
          </GradientBorder>
        </BorderTile>
      ))}
    </div>
  );
}
