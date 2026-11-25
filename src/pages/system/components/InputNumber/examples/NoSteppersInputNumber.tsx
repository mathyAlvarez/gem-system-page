import { InputNumber } from "@gem-org/gem-system";

type NoSteppersInputNumberProps = { label: string; helperText: string };

export function NoSteppersInputNumber({ label, helperText }: NoSteppersInputNumberProps) {
  return (
    <InputNumber label={label} defaultValue={42} showSteppers={false} helperText={helperText} />
  );
}
