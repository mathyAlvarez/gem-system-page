import { InputSearch } from "@gem-org/gem-system";
import { Filter } from "@gem-org/gem-system/icons";

type SuffixInputSearchProps = { label: string; defaultValue: string; helperText: string };

export function SuffixInputSearch({ label, defaultValue, helperText }: SuffixInputSearchProps) {
  return (
    <InputSearch
      label={label}
      defaultValue={defaultValue}
      suffixIcon={<Filter size="sm" strokeWidth={2.1} />}
      helperText={helperText}
    />
  );
}
