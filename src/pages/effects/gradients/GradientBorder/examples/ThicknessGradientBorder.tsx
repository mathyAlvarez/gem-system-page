import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

export function ThicknessGradientBorder() {
  return (
    <div className="gb-demo">
      {[1, 2, 4, "0.5rem"].map((thickness) => (
        <BorderTile
          key={thickness}
          label={
            typeof thickness === "number" ? `thickness={${thickness}}` : `thickness="${thickness}"`
          }
        >
          <GradientBorder thickness={thickness} className="gb-demo__host">
            <BorderTarget>{thickness}</BorderTarget>
          </GradientBorder>
        </BorderTile>
      ))}
    </div>
  );
}
