import { InputSearch } from "@gem-org/gem-system";

type ValueInputSearchProps = { label: string; defaultValue: string; helperText: string };

export function ValueInputSearch({ label, defaultValue, helperText }: ValueInputSearchProps) {
  return <InputSearch label={label} defaultValue={defaultValue} helperText={helperText} />;
}
