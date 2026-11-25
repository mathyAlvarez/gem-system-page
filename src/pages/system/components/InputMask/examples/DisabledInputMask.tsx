import { InputMask } from "@gem-org/gem-system";

type DisabledInputMaskProps = { label: string };

export function DisabledInputMask({ label }: DisabledInputMaskProps) {
  return <InputMask label={label} preset="date" defaultValue="20/12/1990" isDisabled />;
}
