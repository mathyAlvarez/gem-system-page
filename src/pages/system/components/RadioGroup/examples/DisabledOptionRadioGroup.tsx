import { Radio, RadioGroup } from "@gem-org/gem-system";

type DisabledOptionRadioGroupProps = {
  label: string;
  standard: string;
  standardHelper: string;
  express: string;
  expressHelper: string;
  pickup: string;
};

export function DisabledOptionRadioGroup({
  label,
  standard,
  standardHelper,
  express,
  expressHelper,
  pickup,
}: DisabledOptionRadioGroupProps) {
  return (
    <RadioGroup name="shipping-option" label={label} defaultValue="standard">
      <Radio value="standard" label={standard} helperText={standardHelper} />
      <Radio value="express" label={express} helperText={expressHelper} isDisabled />
      <Radio value="pickup" label={pickup} />
    </RadioGroup>
  );
}
