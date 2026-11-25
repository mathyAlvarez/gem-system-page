import { OtpInput } from "@gem-org/gem-system";
import "./otp-input-overrides.css";

type StyledOtpInputProps = { label: string; helperText: string };

export function StyledOtpInput({ label, helperText }: StyledOtpInputProps) {
  return (
    <OtpInput
      label={label}
      separator="·"
      helperText={helperText}
      wrapperClassName="otp-input-branded"
    />
  );
}
