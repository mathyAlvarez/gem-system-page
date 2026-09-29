import { InputSearch } from "@gem-org/gem-system";
import { User } from "@gem-org/gem-system/icons";

type CustomIconInputSearchProps = { label: string; placeholder: string };

export function CustomIconInputSearch({ label, placeholder }: CustomIconInputSearchProps) {
  return <InputSearch label={label} prefixIcon={<User size="sm" strokeWidth={2.1} />} placeholder={placeholder} />;
}
