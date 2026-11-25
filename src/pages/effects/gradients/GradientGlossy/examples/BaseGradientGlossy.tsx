import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type BaseGradientGlossyProps = {
  label: string;
};

export function BaseGradientGlossy({ label }: BaseGradientGlossyProps) {
  return (
    <GlossyTile>
      <GradientGlossy className="gg-demo__host">
        <span className="gg-demo__target">{label}</span>
      </GradientGlossy>
    </GlossyTile>
  );
}
