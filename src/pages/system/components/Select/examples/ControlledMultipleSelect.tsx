import { useState } from "react";
import { Select, Typography, type SelectOption } from "@gem-org/gem-system";

type ControlledMultipleSelectProps = {
  options: readonly SelectOption[];
  texts: {
    label: string;
    placeholder: string;
    valueLabel: string;
    searchPlaceholder: string;
    noResultsText: string;
  };
};

export function ControlledMultipleSelect({ options, texts }: ControlledMultipleSelectProps) {
  const [value, setValue] = useState<string[]>(["br", "cl"]);

  return (
    <>
      <Select
        label={texts.label}
        options={options}
        multiple
        value={value}
        onChange={(next) => {
          if (Array.isArray(next)) setValue(next);
        }}
        placeholder={texts.placeholder}
        searchPlaceholder={texts.searchPlaceholder}
        noResultsText={texts.noResultsText}
      />
      <Typography variant="caption" as="p">
        {texts.valueLabel}: <code>{value.join(", ")}</code>
      </Typography>
    </>
  );
}
