import { FieldInfoButton, Radio, RadioGroup } from "@gem-org/gem-system";
import "./with-tooltip.css";

type RadioGroupWithTooltipProps = {
  texts: {
    visibility: string;
    visibilityInfo: string;
    private: string;
    public: string;
    retention: string;
    retentionHelper: string;
    retentionInfo: string;
    days7: string;
    days30: string;
    days90: string;
  };
};

export function RadioGroupWithTooltip({ texts }: RadioGroupWithTooltipProps) {
  return (
    <div className="radio-group-tooltip-demo">
      <RadioGroup
        name="visibility-tooltip"
        label={texts.visibility}
        infoText={texts.visibilityInfo}
        defaultValue="private"
      >
        <Radio value="private" label={texts.private} />
        <Radio value="public" label={texts.public} />
      </RadioGroup>

      <div className="radio-group-with-tooltip">
        <RadioGroup
          name="retention-tooltip"
          label={texts.retention}
          helperText={texts.retentionHelper}
          defaultValue="30"
        >
          <Radio value="7" label={texts.days7} />
          <Radio value="30" label={texts.days30} />
          <Radio value="90" label={texts.days90} />
        </RadioGroup>
        <FieldInfoButton content={texts.retentionInfo} />
      </div>
    </div>
  );
}
