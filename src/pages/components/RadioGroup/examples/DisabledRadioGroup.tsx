import { Radio, RadioGroup } from "@gem-org/gem-system";

type DisabledRadioGroupProps = {
  label: string;
  helperText: string;
  monthly: string;
  yearly: string;
};

export function DisabledRadioGroup({ label, helperText, monthly, yearly }: DisabledRadioGroupProps) {
  return (
    <RadioGroup name="billing-disabled" label={label} helperText={helperText} defaultValue="monthly" isDisabled>
      <Radio value="monthly" label={monthly} />
      <Radio value="yearly" label={yearly} />
    </RadioGroup>
  );
}
