import { OtpInput } from "@gem-org/gem-system";

type MaskedOtpInputProps = { label: string; helperText: string };

export function MaskedOtpInput({ label, helperText }: MaskedOtpInputProps) {
  return <OtpInput label={label} length={6} mask defaultValue="482910" helperText={helperText} />;
}
