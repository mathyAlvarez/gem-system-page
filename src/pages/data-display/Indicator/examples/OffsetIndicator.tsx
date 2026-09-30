import { Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";

const OFFSETS = [0, 8, 16] as const;

type OffsetIndicatorProps = { label: string };

export function OffsetIndicator({ label }: OffsetIndicatorProps) {
  return (
    <div className="indicator-row">
      {OFFSETS.map((offset) => (
        <div key={offset} className="indicator-stack">
          <p className="indicator-caption">offset={offset}</p>
          <Indicator variant="flag" tone="secondary" offset={offset} label={label}>
            <span className="indicator-tile indicator-tile--muted" />
          </Indicator>
        </div>
      ))}
    </div>
  );
}
