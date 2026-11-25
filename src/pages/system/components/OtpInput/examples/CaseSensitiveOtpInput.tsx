import { OtpInput } from "@gem-org/gem-system";

type CaseSensitiveOtpInputProps = { label: string; helperText: string };

export function CaseSensitiveOtpInput({ label, helperText }: CaseSensitiveOtpInputProps) {
  return (
    <OtpInput
      label={label}
      type="alphanumeric"
      uppercase={false}
      length={6}
      helperText={helperText}
    />
  );
}
