import { Indicator } from "@gem-org/gem-system";
import { INDICATOR_PLACEMENTS } from "./demo.ts";
import "./indicator-demo.css";

type PlacementsIndicatorProps = { label: string };

export function PlacementsIndicator({ label }: PlacementsIndicatorProps) {
  return (
    <div className="indicator-row">
      {INDICATOR_PLACEMENTS.map((placement) => (
        <div key={placement} className="indicator-stack">
          <p className="indicator-caption">{placement}</p>
          <Indicator placement={placement} label={label}>
            <span className="indicator-tile indicator-tile--muted" />
          </Indicator>
        </div>
      ))}
    </div>
  );
}
