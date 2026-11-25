import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";
import "./gradient-border-overrides.css";

type StyledGradientBorderProps = {
  label: string;
};

export function StyledGradientBorder({ label }: StyledGradientBorderProps) {
  return (
    <BorderTile>
      <GradientBorder thickness={3} duration={6000} className="gb-aurora">
        <span className="gb-demo__text">{label}</span>
      </GradientBorder>
    </BorderTile>
  );
}
