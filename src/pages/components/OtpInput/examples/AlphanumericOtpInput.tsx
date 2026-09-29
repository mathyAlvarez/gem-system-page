import { OtpInput } from "@gem-org/gem-system";

type AlphanumericOtpInputProps = { label: string; helperText: string };

export function AlphanumericOtpInput({ label, helperText }: AlphanumericOtpInputProps) {
  return <OtpInput label={label} type="alphanumeric" length={6} helperText={helperText} />;
}
