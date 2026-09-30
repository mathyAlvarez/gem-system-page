import { Indicator } from "@gem-org/gem-system";
import { INDICATOR_TONES } from "./demo.ts";
import "./indicator-demo.css";

type TonesIndicatorProps = { label: string };

export function TonesIndicator({ label }: TonesIndicatorProps) {
  return (
    <div className="indicator-row">
      {INDICATOR_TONES.map((tone) => (
        <div key={tone} className="indicator-stack">
          <p className="indicator-caption">{tone}</p>
          <Indicator variant="flag" tone={tone} label={label}>
            <span className="indicator-tile indicator-tile--muted" />
          </Indicator>
        </div>
      ))}
    </div>
  );
}
