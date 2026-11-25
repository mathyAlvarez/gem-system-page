import { Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";

type BaseIndicatorProps = { label: string };

export function BaseIndicator({ label }: BaseIndicatorProps) {
  return (
    <Indicator label={label}>
      <span className="indicator-tile" />
    </Indicator>
  );
}
