import { InputMask } from "@gem-org/gem-system";

type OutlineLabelInputMaskProps = { label: string; helperText: string };

export function OutlineLabelInputMask({ label, helperText }: OutlineLabelInputMaskProps) {
  return <InputMask label={label} preset="phone" labelPlacement="outline" helperText={helperText} />;
}
