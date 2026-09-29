import { FieldInfoButton, Switch, Tooltip } from "@gem-org/gem-system";
import { Info } from "@gem-org/gem-system/icons";
import "./with-tooltip.css";

type TooltipSwitchProps = {
  marketing: string;
  marketingHelper: string;
  marketingInfo: string;
  priority: string;
  priorityInfo: string;
  analytics: string;
  analyticsTitle: string;
  analyticsBody: string;
  analyticsAria: string;
};

export function TooltipSwitch(texts: TooltipSwitchProps) {
  return (
    <div className="switch-tooltip-demo">
      <div className="switch-with-tooltip">
        <Switch label={texts.marketing} helperText={texts.marketingHelper} defaultChecked />
        <FieldInfoButton content={texts.marketingInfo} />
      </div>

      <Tooltip content={texts.priorityInfo} placement="top">
        <span className="switch-tooltip-target" tabIndex={0}>
          <Switch label={texts.priority} isDisabled />
        </span>
      </Tooltip>

      <div className="switch-with-tooltip">
        <Switch label={texts.analytics} tone="info" />
        <Tooltip
          delay={150}
          content={
            <span className="switch-tooltip-content">
              <strong>{texts.analyticsTitle}</strong>
              <span>{texts.analyticsBody}</span>
            </span>
          }
        >
          <button type="button" className="gem-field-info" aria-label={texts.analyticsAria}>
            <Info size="sm" strokeWidth={2.1} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
