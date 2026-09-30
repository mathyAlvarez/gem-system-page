import { Indicator } from "@gem-org/gem-system";
import { INDICATOR_TEXT_STYLES } from "./demo.ts";
import "./indicator-demo.css";

type TypographyIndicatorProps = { label: string; custom: string };

export function TypographyIndicator({ label, custom }: TypographyIndicatorProps) {
  return (
    <div className="indicator-row">
      {INDICATOR_TEXT_STYLES.map((textStyle) => (
        <div key={textStyle} className="indicator-stack">
          <p className="indicator-caption">{textStyle}</p>
          <Indicator variant="fold" textStyle={textStyle} label={label}>
            <span className="indicator-tile indicator-tile--muted" />
          </Indicator>
        </div>
      ))}
      <div className="indicator-stack">
        <p className="indicator-caption">ReactNode</p>
        <Indicator variant="fold" label={<span className="indicator-custom-type">{custom}</span>} aria-label={custom}>
          <span className="indicator-tile indicator-tile--muted" />
        </Indicator>
      </div>
    </div>
  );
}
