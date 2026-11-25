import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type BaseGradientBorderProps = {
  label: string;
};

export function BaseGradientBorder({ label }: BaseGradientBorderProps) {
  return (
    <BorderTile>
      <GradientBorder className="gb-demo__host">
        <BorderTarget>{label}</BorderTarget>
      </GradientBorder>
    </BorderTile>
  );
}
