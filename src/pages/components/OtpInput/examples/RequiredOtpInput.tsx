import { OtpInput } from "@gem-org/gem-system";

type RequiredOtpInputProps = { label: string; helperText: string };

export function RequiredOtpInput({ label, helperText }: RequiredOtpInputProps) {
  return <OtpInput label={label} isRequired helperText={helperText} />;
}
