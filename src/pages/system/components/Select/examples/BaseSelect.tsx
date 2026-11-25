import { Select, type SelectOption } from "@gem-org/gem-system";

type BaseSelectProps = {
  options: readonly SelectOption[];
  texts: {
    label: string;
    placeholder: string;
    helperText: string;
    searchPlaceholder: string;
    noResultsText: string;
  };
};

export function BaseSelect({ options, texts }: BaseSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      placeholder={texts.placeholder}
      helperText={texts.helperText}
      searchPlaceholder={texts.searchPlaceholder}
      noResultsText={texts.noResultsText}
    />
  );
}
