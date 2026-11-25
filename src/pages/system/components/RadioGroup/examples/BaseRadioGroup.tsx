import { Radio, RadioGroup } from "@gem-org/gem-system";

type BaseRadioGroupProps = {
  label: string;
  helperText: string;
  email: string;
  emailHelper: string;
  sms: string;
  push: string;
};

export function BaseRadioGroup({
  label,
  helperText,
  email,
  emailHelper,
  sms,
  push,
}: BaseRadioGroupProps) {
  return (
    <RadioGroup name="channel-base" label={label} helperText={helperText} defaultValue="email">
      <Radio value="email" label={email} helperText={emailHelper} />
      <Radio value="sms" label={sms} />
      <Radio value="push" label={push} />
    </RadioGroup>
  );
}
