import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

const PALETTES = [
  {
    label: "cool",
    from: "var(--gem-palette-primary-300)",
    via: "var(--gem-palette-info-500)",
    to: "var(--gem-palette-secondary-400)",
  },
  {
    label: "warm",
    from: "var(--gem-palette-tertiary-300)",
    via: "var(--gem-palette-error-400)",
    to: "var(--gem-palette-warning-300)",
  },
  {
    label: "mono",
    from: "var(--gem-palette-neutral-100)",
    via: "var(--gem-palette-neutral-400)",
    to: "var(--gem-palette-neutral-100)",
  },
];

export function ColorsGradientText() {
  return (
    <div className="gt-demo">
      {PALETTES.map((palette) => (
        <TextTile key={palette.label} label={palette.label}>
          <GradientText from={palette.from} via={palette.via} to={palette.to}>
            <span className="gt-demo__copy">{palette.label}</span>
          </GradientText>
        </TextTile>
      ))}
    </div>
  );
}
