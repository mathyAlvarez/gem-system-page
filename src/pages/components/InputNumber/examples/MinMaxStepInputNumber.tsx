import { InputNumber } from "@gem-org/gem-system";

type MinMaxStepInputNumberProps = { label: string; helperText: string };

export function MinMaxStepInputNumber({ label, helperText }: MinMaxStepInputNumberProps) {
  return (
    <InputNumber label={label} defaultValue={0} min={0} max={10} step={0.5} precision={1} helperText={helperText} />
  );
}
