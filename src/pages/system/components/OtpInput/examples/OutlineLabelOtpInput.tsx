import { OtpInput } from "@gem-org/gem-system";

type OutlineLabelOtpInputProps = { label: string; helperText: string };

export function OutlineLabelOtpInput({ label, helperText }: OutlineLabelOtpInputProps) {
  return <OtpInput label={label} labelPlacement="outline" helperText={helperText} />;
}
