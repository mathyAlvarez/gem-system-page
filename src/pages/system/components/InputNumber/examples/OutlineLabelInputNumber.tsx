import { InputNumber } from "@gem-org/gem-system";

type OutlineLabelInputNumberProps = { label: string };

export function OutlineLabelInputNumber({ label }: OutlineLabelInputNumberProps) {
  return <InputNumber label={label} labelPlacement="outline" defaultValue={3} min={0} />;
}
