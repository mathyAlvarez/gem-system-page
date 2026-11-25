import { InputNumber } from "@gem-org/gem-system";
import "./input-number-overrides.css";

type StyledInputNumberProps = { label: string; helperText: string };

export function StyledInputNumber({ label, helperText }: StyledInputNumberProps) {
  return (
    <InputNumber
      label={label}
      defaultValue={3}
      min={0}
      additionButtons
      helperText={helperText}
      wrapperClassName="input-number-branded"
    />
  );
}
