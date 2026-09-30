import { Indicator } from "@gem-org/gem-system";
import { INDICATOR_SIZES } from "./demo.ts";
import "./indicator-demo.css";

type SizesIndicatorProps = { label: string };

export function SizesIndicator({ label }: SizesIndicatorProps) {
  return (
    <div className="indicator-row">
      {INDICATOR_SIZES.map((size) => (
        <div key={size} className="indicator-stack">
          <p className="indicator-caption">{size}</p>
          <Indicator size={size} label={label}>
            <span className="indicator-tile" />
          </Indicator>
        </div>
      ))}
    </div>
  );
}
