import { InputNumber } from "@gem-org/gem-system";

type BaseInputNumberProps = { label: string; helperText: string };

export function BaseInputNumber({ label, helperText }: BaseInputNumberProps) {
  return <InputNumber label={label} defaultValue={1} helperText={helperText} />;
}
