import { InputSearch } from "@gem-org/gem-system";

type NoIconInputSearchProps = { label: string; defaultValue: string; helperText: string };

export function NoIconInputSearch({ label, defaultValue, helperText }: NoIconInputSearchProps) {
  return <InputSearch label={label} prefixIcon={null} defaultValue={defaultValue} helperText={helperText} />;
}
