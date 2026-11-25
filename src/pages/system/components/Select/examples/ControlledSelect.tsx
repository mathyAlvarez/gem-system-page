import { useState } from "react";
import { Select, Typography, type SelectOption } from "@gem-org/gem-system";

type ControlledSelectProps = {
  options: readonly SelectOption[];
  texts: { label: string; valueLabel: string; searchPlaceholder: string; noResultsText: string };
};

export function ControlledSelect({ options, texts }: ControlledSelectProps) {
  const [value, setValue] = useState("br");

  return (
    <>
      <Select
        label={texts.label}
        options={options}
        value={value}
        onChange={(next) => {
          if (typeof next === "string") setValue(next);
        }}
        searchPlaceholder={texts.searchPlaceholder}
        noResultsText={texts.noResultsText}
      />
      <Typography variant="caption" as="p">
        {texts.valueLabel}: <code>{value}</code>
      </Typography>
    </>
  );
}
