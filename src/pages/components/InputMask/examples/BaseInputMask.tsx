import { InputMask } from "@gem-org/gem-system";
import { Calendar } from "@gem-org/gem-system/icons";

type BaseInputMaskProps = { label: string; helperText: string };

export function BaseInputMask({ label, helperText }: BaseInputMaskProps) {
  return <InputMask label={label} preset="date" helperText={helperText} prefixIcon={<Calendar size="sm" />} />;
}
