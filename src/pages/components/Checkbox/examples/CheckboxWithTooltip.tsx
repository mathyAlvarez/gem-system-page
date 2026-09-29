import { Checkbox, FieldInfoButton, Tooltip } from "@gem-org/gem-system";
import { Info } from "@gem-org/gem-system/icons";
import "./with-tooltip.css";

type CheckboxWithTooltipProps = {
  texts: {
    marketing: string;
    marketingHelper: string;
    marketingInfo: string;
    priority: string;
    priorityInfo: string;
    analytics: string;
    analyticsAria: string;
    analyticsTitle: string;
    analyticsBody: string;
  };
};

export function CheckboxWithTooltip({ texts }: CheckboxWithTooltipProps) {
  return (
    <>
      <div className="checkbox-with-tooltip">
        <Checkbox label={texts.marketing} helperText={texts.marketingHelper} defaultChecked />
        <FieldInfoButton content={texts.marketingInfo} />
      </div>

      <Tooltip content={texts.priorityInfo} placement="top">
        <span className="checkbox-tooltip-target" tabIndex={0}>
          <Checkbox label={texts.priority} isDisabled />
        </span>
      </Tooltip>

      <div className="checkbox-with-tooltip">
        <Checkbox label={texts.analytics} tone="info" />
        <Tooltip
          delay={150}
          content={
            <span>
              <strong>{texts.analyticsTitle}</strong>
              <br />
              {texts.analyticsBody}
            </span>
          }
        >
          <button type="button" className="gem-field-info" aria-label={texts.analyticsAria}>
            <Info size="sm" />
          </button>
        </Tooltip>
      </div>
    </>
  );
}
