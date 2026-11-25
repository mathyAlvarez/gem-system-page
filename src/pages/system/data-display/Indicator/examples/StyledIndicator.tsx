import { Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";
import "./indicator-overrides.css";

type StyledIndicatorProps = { label: string };

export function StyledIndicator({ label }: StyledIndicatorProps) {
  return (
    <Indicator className="indicator-branded" label={label}>
      <span className="indicator-tile indicator-tile--muted" />
    </Indicator>
  );
}
