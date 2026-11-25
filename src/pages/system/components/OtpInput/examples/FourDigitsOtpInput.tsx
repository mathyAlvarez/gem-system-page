import { OtpInput } from "@gem-org/gem-system";

type FourDigitsOtpInputProps = { label: string; helperText: string };

export function FourDigitsOtpInput({ label, helperText }: FourDigitsOtpInputProps) {
  return <OtpInput label={label} length={4} helperText={helperText} />;
}
