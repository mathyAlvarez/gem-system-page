import { InputMask } from "@gem-org/gem-system";

type CustomMaskInputMaskProps = { label: string; helperText: string };

export function CustomMaskInputMask({ label, helperText }: CustomMaskInputMaskProps) {
  return <InputMask label={label} mask="A9999AAA" placeholder="C1425DAB" helperText={helperText} />;
}
