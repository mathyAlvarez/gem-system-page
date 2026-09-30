import { Indicator } from "@gem-org/gem-system";
import { INDICATOR_VARIANTS } from "./demo.ts";
import "./indicator-demo.css";

type VariantsIndicatorProps = { label: string; short: string };

export function VariantsIndicator({ label, short }: VariantsIndicatorProps) {
  return (
    <div className="indicator-row">
      {INDICATOR_VARIANTS.map((variant) => (
        <div key={variant} className="indicator-stack">
          <p className="indicator-caption">{variant}</p>
          <Indicator variant={variant} label={variant === "fold" ? short : label}>
            <span className="indicator-tile" />
          </Indicator>
        </div>
      ))}
    </div>
  );
}
