import { OtpInput } from "@gem-org/gem-system";

type SeparatorOtpInputProps = { label: string; helperText: string };

export function SeparatorOtpInput({ label, helperText }: SeparatorOtpInputProps) {
  return <OtpInput label={label} length={6} separator="–" helperText={helperText} />;
}
