import { Select, type SelectOption } from "@gem-org/gem-system";

type MultipleSelectProps = {
  options: readonly SelectOption[];
  texts: {
    label: string;
    placeholder: string;
    helperText: string;
    searchPlaceholder: string;
    noResultsText: string;
  };
};

export function MultipleSelect({ options, texts }: MultipleSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      multiple
      defaultValue={["br", "es"]}
      placeholder={texts.placeholder}
      helperText={texts.helperText}
      searchPlaceholder={texts.searchPlaceholder}
      noResultsText={texts.noResultsText}
    />
  );
}
