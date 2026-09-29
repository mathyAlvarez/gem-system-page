import { InputSearch } from "@gem-org/gem-system";

type ErrorInputSearchProps = { label: string; placeholder: string; errorMessage: string };

export function ErrorInputSearch({ label, placeholder, errorMessage }: ErrorInputSearchProps) {
  return <InputSearch label={label} placeholder={placeholder} isRequired errorMessage={errorMessage} />;
}
