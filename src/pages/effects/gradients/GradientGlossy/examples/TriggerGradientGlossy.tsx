import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type TriggerGradientGlossyProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerGradientGlossy({ hoverLabel, clickLabel }: TriggerGradientGlossyProps) {
  return (
    <div className="gg-demo">
      <GlossyTile label='trigger="hover"'>
        <GradientGlossy trigger="hover" className="gg-demo__host">
          <span className="gg-demo__target">{hoverLabel}</span>
        </GradientGlossy>
      </GlossyTile>
      <GlossyTile label='trigger="click"'>
        <GradientGlossy trigger="click" className="gg-demo__host">
          <span className="gg-demo__target">{clickLabel}</span>
        </GradientGlossy>
      </GlossyTile>
    </div>
  );
}
