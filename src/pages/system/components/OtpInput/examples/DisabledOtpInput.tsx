import { OtpInput } from "@gem-org/gem-system";

type DisabledOtpInputProps = { label: string; helperText: string };

export function DisabledOtpInput({ label, helperText }: DisabledOtpInputProps) {
  return <OtpInput label={label} defaultValue="123456" isDisabled helperText={helperText} />;
}
