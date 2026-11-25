import { Indicator } from "@gem-org/gem-system";
import { INDICATOR_PLACEMENTS } from "./demo.ts";
import "./indicator-demo.css";

type FoldIndicatorProps = { label: string };

export function FoldIndicator({ label }: FoldIndicatorProps) {
  return (
    <div className="indicator-row">
      {INDICATOR_PLACEMENTS.map((placement) => (
        <div key={placement} className="indicator-stack">
          <p className="indicator-caption">{placement}</p>
          <Indicator variant="fold" placement={placement} label={label}>
            <span className="indicator-tile indicator-tile--muted" />
          </Indicator>
        </div>
      ))}
    </div>
  );
}
