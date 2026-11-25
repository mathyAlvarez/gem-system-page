import { InputMask } from "@gem-org/gem-system";

type CardInputMaskProps = { label: string; helperText: string };

export function CardInputMask({ label, helperText }: CardInputMaskProps) {
  return <InputMask label={label} preset="card" helperText={helperText} />;
}
