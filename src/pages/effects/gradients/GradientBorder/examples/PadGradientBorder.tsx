import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type PadGradientBorderProps = {
  label: string;
};

export function PadGradientBorder({ label }: PadGradientBorderProps) {
  return (
    <div className="gb-demo">
      <BorderTile label="pad (default)">
        <GradientBorder className="gb-demo__host">
          <span className="gb-demo__text">{label}</span>
        </GradientBorder>
      </BorderTile>
      <BorderTile label='pad="var(--gem-palette-neutral-800)"'>
        <GradientBorder pad="var(--gem-palette-neutral-800)" className="gb-demo__host">
          <span className="gb-demo__text">{label}</span>
        </GradientBorder>
      </BorderTile>
    </div>
  );
}
