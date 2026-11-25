import { OtpInput } from "@gem-org/gem-system";

type InfoOtpInputProps = { label: string; infoText: string; helperText: string };

export function InfoOtpInput({ label, infoText, helperText }: InfoOtpInputProps) {
  return <OtpInput label={label} infoText={infoText} helperText={helperText} />;
}
