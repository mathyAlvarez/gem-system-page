import { OtpInput } from "@gem-org/gem-system";

type BaseOtpInputProps = { label: string; helperText: string };

export function BaseOtpInput({ label, helperText }: BaseOtpInputProps) {
  return <OtpInput label={label} helperText={helperText} />;
}
