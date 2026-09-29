import { Radio, RadioGroup } from "@gem-org/gem-system";
import "./radio-group-overrides.css";

type StyledRadioGroupProps = {
  texts: {
    label: string;
    helperText: string;
    a: string;
    aHelper: string;
    b: string;
    bHelper: string;
  };
};

export function StyledRadioGroup({ texts }: StyledRadioGroupProps) {
  return (
    <RadioGroup
      name="branded-radios"
      label={texts.label}
      helperText={texts.helperText}
      wrapperClassName="radio-group-branded"
      defaultValue="a"
    >
      <Radio value="a" label={texts.a} helperText={texts.aHelper} wrapperClassName="radio-option-card" />
      <Radio value="b" label={texts.b} helperText={texts.bHelper} wrapperClassName="radio-option-card" />
    </RadioGroup>
  );
}
