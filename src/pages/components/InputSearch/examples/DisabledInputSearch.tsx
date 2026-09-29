import { InputSearch } from "@gem-org/gem-system";

type DisabledInputSearchProps = { label: string; defaultValue: string };

export function DisabledInputSearch({ label, defaultValue }: DisabledInputSearchProps) {
  return <InputSearch label={label} isDisabled defaultValue={defaultValue} />;
}
