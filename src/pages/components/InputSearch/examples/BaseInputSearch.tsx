import { InputSearch } from "@gem-org/gem-system";

type BaseInputSearchProps = { label: string; placeholder: string; helperText: string };

export function BaseInputSearch({ label, placeholder, helperText }: BaseInputSearchProps) {
  return <InputSearch label={label} placeholder={placeholder} helperText={helperText} />;
}
