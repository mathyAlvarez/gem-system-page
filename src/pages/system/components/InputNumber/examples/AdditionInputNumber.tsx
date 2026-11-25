import { InputNumber } from "@gem-org/gem-system";

type AdditionInputNumberProps = { label: string; helperText: string };

export function AdditionInputNumber({ label, helperText }: AdditionInputNumberProps) {
  return (
    <InputNumber
      label={label}
      labelPlacement="outline"
      defaultValue={10}
      min={10}
      max={40}
      additionButtons
      helperText={helperText}
    />
  );
}
