import { OtpInput } from "@gem-org/gem-system";

type FiveDigitsOtpInputProps = { label: string; helperText: string };

export function FiveDigitsOtpInput({ label, helperText }: FiveDigitsOtpInputProps) {
  return <OtpInput label={label} length={5} helperText={helperText} />;
}
