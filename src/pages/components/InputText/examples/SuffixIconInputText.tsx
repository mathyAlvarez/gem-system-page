import { InputText } from "@gem-org/gem-system";
import { Search } from "@gem-org/gem-system/icons";

type SuffixIconInputTextProps = { label: string; placeholder: string };

export function SuffixIconInputText({ label, placeholder }: SuffixIconInputTextProps) {
  return <InputText label={label} type="search" placeholder={placeholder} suffixIcon={<Search size="sm" />} />;
}
