import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTarget, BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

const PALETTES = [
  {
    label: "primary → secondary",
    from: "var(--gem-palette-primary-300)",
    via: "var(--gem-palette-secondary-400)",
    to: "var(--gem-palette-primary-500)",
  },
  {
    label: "warm",
    from: "var(--gem-palette-tertiary-300)",
    via: "var(--gem-palette-error-400)",
    to: "var(--gem-palette-warning-300)",
  },
  {
    label: "mono",
    from: "var(--gem-palette-neutral-50)",
    via: "var(--gem-palette-neutral-500)",
    to: "var(--gem-palette-neutral-200)",
  },
];

export function ColorsGradientBorder() {
  return (
    <div className="gb-demo">
      {PALETTES.map((palette) => (
        <BorderTile key={palette.label} label={palette.label}>
          <GradientBorder
            from={palette.from}
            via={palette.via}
            to={palette.to}
            thickness={3}
            className="gb-demo__host"
          >
            <BorderTarget>{palette.label}</BorderTarget>
          </GradientBorder>
        </BorderTile>
      ))}
    </div>
  );
}
