import { InputMask } from "@gem-org/gem-system";
import "./input-mask-overrides.css";

type StyledInputMaskProps = { label: string; helperText: string };

export function StyledInputMask({ label, helperText }: StyledInputMaskProps) {
  return (
    <InputMask
      label={label}
      preset="phone"
      prefix="Tel."
      helperText={helperText}
      wrapperClassName="input-mask-branded"
    />
  );
}
