import { ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type TailwindProgressProps = { label: string };

export function TailwindProgress({ label }: TailwindProgressProps) {
  return (
    <div className="progress-stack">
      <ProgressBar
        label={label}
        value={64}
        showValue
        showThumb
        className="[--gem-progress-h:0.75rem] [--gem-progress-fill:var(--gem-palette-secondary-500)] [--gem-progress-track:color-mix(in_srgb,var(--gem-palette-secondary-500)_15%,transparent)]"
        classNames={{
          label: "uppercase tracking-wider",
          value: "font-bold text-(--gem-progress-fill)",
          fill: "bg-linear-to-r from-(--gem-palette-secondary-500) to-(--gem-palette-tertiary-500)",
        }}
      />
    </div>
  );
}
