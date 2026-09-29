import { InputNumber } from "@gem-org/gem-system";

type DisabledInputNumberProps = { label: string };

export function DisabledInputNumber({ label }: DisabledInputNumberProps) {
  return <InputNumber label={label} defaultValue={5} isDisabled />;
}
