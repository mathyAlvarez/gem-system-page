import { Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";

type TailwindIndicatorProps = { label: string; short: string };

export function TailwindIndicator({ label, short }: TailwindIndicatorProps) {
  return (
    <div className="indicator-row">
      <Indicator
        label={label}
        className="[--gem-indicator-bg:var(--gem-palette-secondary-700)] [--gem-indicator-fg:var(--gem-palette-neutral-0)]"
        classNames={{ mark: "shadow-lg", label: "tracking-[0.2em]" }}
      >
        <span className="indicator-tile" />
      </Indicator>
      <Indicator
        variant="flag"
        label={short}
        className="[--gem-indicator-flag-h:2rem]"
        classNames={{ mark: "rounded-full m-2 px-3", label: "normal-case" }}
      >
        <span className="indicator-tile indicator-tile--muted" />
      </Indicator>
    </div>
  );
}
