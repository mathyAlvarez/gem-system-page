import { useState } from "react";
import { Combobox, Typography } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type ControlledMultipleComboboxProps = { label: string; valueLabel: string; empty: string };

export function ControlledMultipleCombobox({
  label,
  valueLabel,
  empty,
}: ControlledMultipleComboboxProps) {
  const [value, setValue] = useState<string[]>(["ar", "cl"]);

  return (
    <>
      <Combobox
        label={label}
        options={COUNTRIES}
        multiple
        value={value}
        onChange={(next) => {
          if (Array.isArray(next)) setValue(next);
        }}
      />
      <Typography variant="caption">
        {valueLabel}: <code>{value.join(", ") || empty}</code>
      </Typography>
    </>
  );
}
