import { InputSearch } from "@gem-org/gem-system";
import "./input-search-overrides.css";

type StyledInputSearchProps = { label: string; placeholder: string; helperText: string };

export function StyledInputSearch({ label, placeholder, helperText }: StyledInputSearchProps) {
  return (
    <InputSearch
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      wrapperClassName="input-search-branded"
    />
  );
}
