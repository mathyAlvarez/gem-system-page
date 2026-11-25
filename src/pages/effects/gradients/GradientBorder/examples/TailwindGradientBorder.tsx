import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type TailwindGradientBorderProps = {
  label: string;
};

export function TailwindGradientBorder({ label }: TailwindGradientBorderProps) {
  return (
    <BorderTile>
      <GradientBorder
        thickness={2}
        className="rounded-full [--gemfx-gradient-border-from:var(--gem-palette-secondary-300)] [--gemfx-gradient-border-via:var(--gem-palette-primary-400)] [--gemfx-gradient-border-to:var(--gem-palette-secondary-500)]"
      >
        <span className="px-[var(--gem-space-5)] py-[var(--gem-space-2)] font-semibold">
          {label}
        </span>
      </GradientBorder>
    </BorderTile>
  );
}
