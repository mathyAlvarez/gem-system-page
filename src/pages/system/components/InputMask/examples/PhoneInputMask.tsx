import { InputMask } from "@gem-org/gem-system";

type PhoneInputMaskProps = { label: string; helperText: string };

export function PhoneInputMask({ label, helperText }: PhoneInputMaskProps) {
  return <InputMask label={label} preset="phone" helperText={helperText} />;
}
