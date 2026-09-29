import { Select, type SelectOption } from "@gem-org/gem-system";

type ErrorSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; placeholder: string; errorMessage: string; searchPlaceholder: string; noResultsText: string };
};

export function ErrorSelect({ options, texts }: ErrorSelectProps) {
  return (
    <Select
      label={texts.label}
      options={options}
      isRequired
      placeholder={texts.placeholder}
      errorMessage={texts.errorMessage}
      searchPlaceholder={texts.searchPlaceholder}
      noResultsText={texts.noResultsText}
    />
  );
}
