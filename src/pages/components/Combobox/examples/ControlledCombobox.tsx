import { useState } from "react";
import { Combobox, Typography } from "@gem-org/gem-system";
import { COUNTRIES } from "./data";

type ControlledComboboxProps = { label: string; valueLabel: string; empty: string };

export function ControlledCombobox({ label, valueLabel, empty }: ControlledComboboxProps) {
  const [value, setValue] = useState("ar");

  return (
    <>
      <Combobox
        label={label}
        options={COUNTRIES}
        value={value}
        onChange={(next) => {
          if (typeof next === "string") setValue(next);
        }}
      />
      <Typography variant="caption">
        {valueLabel}: <code>{value || empty}</code>
      </Typography>
    </>
  );
}
