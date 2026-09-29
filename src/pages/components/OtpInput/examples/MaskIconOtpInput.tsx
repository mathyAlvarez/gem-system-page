import { OtpInput } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";

type MaskIconOtpInputProps = { label: string; helperText: string };

export function MaskIconOtpInput({ label, helperText }: MaskIconOtpInputProps) {
  return <OtpInput label={label} length={6} maskIcon={<Star size="sm" />} defaultValue="482910" helperText={helperText} />;
}
