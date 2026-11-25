import { Button } from "@gem-org/gem-system";
import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type AsChildGradientBorderProps = {
  label: string;
  cardLabel: string;
};

export function AsChildGradientBorder({ label, cardLabel }: AsChildGradientBorderProps) {
  return (
    <div className="gb-demo">
      {(["neutral", "primary"] as const).map((variant) => (
        <BorderTile key={variant} label={`<Button variant="${variant}">`}>
          <GradientBorder asChild>
            <Button variant={variant}>{label}</Button>
          </GradientBorder>
        </BorderTile>
      ))}
      <BorderTile label='trigger="hover"'>
        <GradientBorder asChild thickness={1} trigger="hover">
          <div className="gb-demo__outlined">{cardLabel}</div>
        </GradientBorder>
      </BorderTile>
    </div>
  );
}
