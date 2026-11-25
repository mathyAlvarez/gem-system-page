import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";
import "./gradient-glossy-overrides.css";

type StyledGradientGlossyProps = {
  label: string;
};

export function StyledGradientGlossy({ label }: StyledGradientGlossyProps) {
  return (
    <GlossyTile>
      <GradientGlossy className="gg-candy">
        <span className="gg-demo__target">{label}</span>
      </GradientGlossy>
    </GlossyTile>
  );
}
