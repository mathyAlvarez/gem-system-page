import { Indicator } from "@gem-org/gem-system";
import { Heart } from "@gem-org/gem-system/icons";
import "./indicator-demo.css";

type IconIndicatorProps = { loved: string; featured: string };

export function IconIndicator({ loved, featured }: IconIndicatorProps) {
  return (
    <div className="indicator-row">
      <div className="indicator-stack">
        <p className="indicator-caption">icon + label</p>
        <Indicator variant="flag" tone="error" icon={<Heart />} label={loved}>
          <span className="indicator-tile" />
        </Indicator>
      </div>
      <div className="indicator-stack">
        <p className="indicator-caption">icon only</p>
        <Indicator variant="fold" aria-label={featured}>
          <span className="indicator-tile" />
        </Indicator>
      </div>
    </div>
  );
}
