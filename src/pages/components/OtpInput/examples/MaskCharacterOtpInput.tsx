import { OtpInput } from "@gem-org/gem-system";

type MaskCharacterOtpInputProps = { label: string; helperText: string };

export function MaskCharacterOtpInput({ label, helperText }: MaskCharacterOtpInputProps) {
  return <OtpInput label={label} length={6} maskIcon="*" defaultValue="482910" helperText={helperText} />;
}
