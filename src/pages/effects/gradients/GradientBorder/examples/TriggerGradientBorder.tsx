import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type TriggerGradientBorderProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerGradientBorder({ hoverLabel, clickLabel }: TriggerGradientBorderProps) {
  return (
    <div className="gb-demo">
      <BorderTile label='trigger="hover"'>
        <GradientBorder trigger="hover" className="gb-demo__host">
          <BorderTarget>{hoverLabel}</BorderTarget>
        </GradientBorder>
      </BorderTile>
      <BorderTile label='trigger="click"'>
        <GradientBorder trigger="click" className="gb-demo__host">
          <BorderTarget>{clickLabel}</BorderTarget>
        </GradientBorder>
      </BorderTile>
    </div>
  );
}
