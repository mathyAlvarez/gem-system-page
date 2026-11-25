import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

export function VariantsGradientBorder() {
  return (
    <div className="gb-demo">
      {(["flow", "static", "pulse"] as const).map((variant) => (
        <BorderTile key={variant} label={`variant="${variant}"`}>
          <GradientBorder variant={variant} thickness={3} className="gb-demo__host">
            <BorderTarget>{variant}</BorderTarget>
          </GradientBorder>
        </BorderTile>
      ))}
    </div>
  );
}
