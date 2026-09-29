import { Radio, RadioGroup } from "@gem-org/gem-system";

type RequiredRadioGroupProps = {
  label: string;
  helperText: string;
  personal: string;
  business: string;
};

export function RequiredRadioGroup({ label, helperText, personal, business }: RequiredRadioGroupProps) {
  return (
    <RadioGroup name="account-required" label={label} helperText={helperText} isRequired>
      <Radio value="personal" label={personal} />
      <Radio value="business" label={business} />
    </RadioGroup>
  );
}
