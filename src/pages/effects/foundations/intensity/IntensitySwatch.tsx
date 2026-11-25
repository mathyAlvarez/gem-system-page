import { Typography } from "@gem-org/gem-system";

type IntensitySwatchProps = {
  /** CSS percentage used for the accent mix, e.g. `55%`. */
  mix: string;
  label: string;
  value: string;
};

export function IntensitySwatch({ mix, label, value }: IntensitySwatchProps) {
  return (
    <div className="intensity-swatch">
      <span
        className="intensity-swatch__chip"
        style={{ background: `color-mix(in srgb, var(--gem-color-accent) ${mix}, transparent)` }}
        aria-hidden
      />
      <div className="intensity-swatch__meta">
        <Typography variant="label">{label}</Typography>
        <code className="intensity-swatch__value">{value}</code>
      </div>
    </div>
  );
}
